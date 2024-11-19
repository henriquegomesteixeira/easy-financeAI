"use server";

import { db } from "@/app/_lib/prisma";
import { DeleteTransactionSchema } from "./schema";
import { revalidatePath } from "next/cache";

// Função para deletar uma transação com base no ID fornecido
export const deleteTransaction = async ({
  transactionId,
}: DeleteTransactionSchema) => {
  // Remove a transação do banco de dados
  await db.transaction.delete({
    where: {
      id: transactionId,
    },
  });

  // Revalida as rotas afetadas para garantir dados atualizados
  revalidatePath("/transactions");
  revalidatePath("/");
};
