"use server";

// Importa o cliente do banco de dados Prisma
import { db } from "@/app/_lib/prisma";
// Importa a autenticação e cliente Clerk para gerenciar usuários
import { auth, clerkClient } from "@clerk/nextjs/server";
// Importa o cliente da OpenAI para geração de relatórios
import OpenAI from "openai";
// Importa schemas para validação de entrada
import { GenerateAiReportSchema, generateAiReportSchema } from "./schema";

// Relatório fictício usado como fallback quando a API da OpenAI não está configurada
const DUMMY_REPORT =
  "### Relatório de Finanças Pessoais\n\n#### Resumo Geral das Finanças\n... (conteúdo do relatório fictício) ...";

// Função para gerar um relatório de finanças usando IA
export const generateAiReport = async ({ month }: GenerateAiReportSchema) => {
  // Valida o esquema dos parâmetros recebidos
  generateAiReportSchema.parse({ month });

  // Obtém o ID do usuário autenticado
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized"); // Lança erro se o usuário não estiver autenticado
  }

  // Obtém os dados do usuário a partir do cliente Clerk
  const user = await clerkClient().users.getUser(userId);

  // Verifica se o usuário tem o plano premium
  const hasPremiumPlan = user.publicMetadata.subscriptionPlan === "premium";

  // Controle de uso para usuários não premium
  if (!hasPremiumPlan) {
    const aiUsageCount = Number(user.publicMetadata.aiUsageCount) || 0; // Obtém o contador atual ou assume 0

    if (aiUsageCount >= 3) {
      throw new Error("You've reached the free usage limit for AI reports.");
    }

    // Incrementa o contador de uso
    await clerkClient.users.updateUser(userId, {
      publicMetadata: {
        ...user.publicMetadata,
        aiUsageCount: aiUsageCount + 1, // Incrementa o contador
      },
    });
  }

  // Verifica se a chave da OpenAI está configurada
  if (!process.env.OPENAI_API_KEY) {
    // Aguarda 1 segundo para simular uma resposta e retorna o relatório fictício
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return DUMMY_REPORT;
  }

  // Inicializa o cliente da OpenAI com a chave de API
  const openAi = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  // Obtém o ano atual para filtrar transações
  const currentYear = new Date().getFullYear();

  // Busca transações do mês especificado para o usuário autenticado
  const transactions = await db.transaction.findMany({
    where: {
      userId,
      date: {
        gte: new Date(`${currentYear}-${month}-01T00:00:00`), // Data inicial do mês
        lt: new Date(currentYear, Number(month), 0, 23, 59, 59), // Último dia do mês
      },
    },
  });

  // Prepara o conteúdo para enviar ao ChatGPT
  const content = `Gere um relatório com insights sobre as minhas finanças, com dicas e orientações de como melhorar minha vida financeira. As transações estão divididas por ponto e vírgula. A estrutura de cada uma é {DATA}-{TIPO}-{VALOR}-{CATEGORIA}. São elas:
  ${transactions
    .map(
      (transaction) =>
        `${transaction.date.toLocaleDateString("pt-BR")}-R$${transaction.amount}-${transaction.type}-${transaction.category}`,
    )
    .join(";")}`;

  // Solicita ao ChatGPT a geração do relatório
  const completion = await openAi.chat.completions.create({
    model: "gpt-4o-mini", // Modelo usado
    messages: [
      {
        role: "system", // Mensagem de contexto para o modelo
        content:
          "Você é um especialista em gestão e organização de finanças pessoais. Você ajuda as pessoas a organizarem melhor as suas finanças.",
      },
      {
        role: "user", // Mensagem com as transações do usuário
        content,
      },
    ],
  });

  // Retorna o relatório gerado pelo ChatGPT
  return completion.choices[0].message.content;
};
