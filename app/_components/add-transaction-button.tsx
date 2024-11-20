"use client";

import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import UpsertTransactionDialog from "./upsert-transaction-dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface AddTransactionButtonProps {
  userCanAddTransaction?: boolean;
}

const AddTransactionButton = ({
  userCanAddTransaction = true, // Padrão como verdadeiro para evitar erros
}: AddTransactionButtonProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          {/* Botão principal */}
          <TooltipTrigger asChild>
            <Button
              className="flex items-center gap-2 rounded-full font-bold"
              onClick={() => setDialogIsOpen(true)}
              disabled={!userCanAddTransaction} // Desabilita o botão se o usuário não puder adicionar
            >
              <span>
                Adicionar <span className="hidden lg:inline">Transação</span>
              </span>
              <ArrowDownUpIcon />
            </Button>
          </TooltipTrigger>

          {/* Tooltip que explica o motivo da desabilitação do botão */}
          {!userCanAddTransaction && (
            <TooltipContent>
              Você atingiu o limite de transações. Atualize seu plano para criar
              transações ilimitadas.
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>

      {/* Modal de criação/edição de transações */}
      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
      />
    </>
  );
};

export default AddTransactionButton;
