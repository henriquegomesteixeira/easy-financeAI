"use client";

import { Button } from "@/app/_components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import { BotIcon, Loader2Icon } from "lucide-react";
import { generateAiReport } from "../_actions/generate-ai-report";
import { useState } from "react";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import Markdown from "react-markdown";
import Link from "next/link";

interface AiReportButtonProps {
  hasPremiumPlan: boolean;
  month: string;
  initialAiUsageCount: number;
}

// Componente para gerar e exibir o relatório de IA
const AiReportButton = ({
  month,
  hasPremiumPlan,
  initialAiUsageCount,
}: AiReportButtonProps) => {
  // Estado que armazena o conteúdo do relatório gerado
  const [report, setReport] = useState<string | null>(null);
  // Estado que controla se o relatório está sendo carregado
  const [reportIsLoading, setReportIsLoading] = useState(false);
  // Estado que controla a quantidade de relatórios usados
  const [aiUsageCount, setAiUsageCount] = useState(initialAiUsageCount);

  const usageLimit = 3; // Limite de 3 relatórios gratuitos para usuários não premium

  // Função acionada quando o botão para gerar o relatório é clicado
  const handleGenerateReportClick = async () => {
    try {
      setReportIsLoading(true); // Inicia o carregamento
      const aiReport = await generateAiReport({ month }); // Gera o relatório usando a função assíncrona
      setReport(aiReport); // Atualiza o estado com o conteúdo do relatório

      // Se o usuário não for premium, aumenta o contador de uso de relatórios gratuitos
      if (!hasPremiumPlan) {
        setAiUsageCount((prevCount) => prevCount + 1);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setReportIsLoading(false); // Finaliza o carregamento
    }
  };

  // Verifica se o limite de uso gratuito foi atingido
  const isFreeUsageExceeded = !hasPremiumPlan && aiUsageCount >= usageLimit;

  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) {
          setReport(null); // Limpa o relatório ao fechar o diálogo
        }
      }}
    >
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="w-fit rounded-full border sm:border-none"
        >
          <span className="hidden sm:block">Relatório </span>IA
          <BotIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[600px]">
        {/* Exibe o conteúdo do relatório gerado */}
        {report ? (
          <>
            <DialogHeader>
              <DialogTitle>Relatório IA</DialogTitle>
              <DialogDescription>
                Veja abaixo o relatório gerado com inteligência artificial.
              </DialogDescription>
            </DialogHeader>
            {/* Exibe o conteúdo do relatório com markdown dentro de uma área rolável */}
            <ScrollArea className="prose max-h-[450px] text-white prose-h3:text-white prose-h4:text-white prose-strong:text-white">
              <Markdown>{report}</Markdown>
            </ScrollArea>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="ghost">Fechar</Button>
              </DialogClose>
            </DialogFooter>
          </>
        ) : isFreeUsageExceeded ? (
          // Caso o limite de uso gratuito seja atingido
          <>
            <DialogHeader>
              <DialogTitle>Limite de Uso Atingido</DialogTitle>
              <DialogDescription>
                Você atingiu o limite de {usageLimit} relatórios gratuitos.
                Considere assinar o plano premium para continuar usando esta
                funcionalidade.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="ghost">Cancelar</Button>
              </DialogClose>
              <Button asChild>
                <Link href="/subscription">Assinar plano premium</Link>
              </Button>
            </DialogFooter>
          </>
        ) : (
          // Exibe o painel com opção de gerar relatório
          <>
            <DialogHeader>
              <DialogTitle>Relatório IA</DialogTitle>
              <DialogDescription>
                {hasPremiumPlan
                  ? "Use inteligência artificial para gerar um relatório com insights sobre suas finanças."
                  : `Você tem ${
                      usageLimit - aiUsageCount
                    } de ${usageLimit} usos gratuitos restantes.`}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="ghost">Cancelar</Button>
              </DialogClose>
              <Button
                onClick={handleGenerateReportClick}
                disabled={reportIsLoading}
              >
                {reportIsLoading && <Loader2Icon className="animate-spin" />}
                Gerar relatório
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AiReportButton;
