"use client";

import { Button } from "@/app/_components/ui/button";
import UpsertTransactionDialog from "@/app/_components/upsert-transaction-dialog";
import { Transaction } from "@prisma/client";
import { PencilIcon } from "lucide-react";
import { useState } from "react";

interface EditTransactionButtonProps {
  transaction: Transaction;
  className?: string;
  sizeButton?: "icon" | "default" | "sm" | "lg" | null | undefined; // Tamanho do botão
}

const EditTransactionButton = ({
  transaction,
  className,
  sizeButton = "icon",
}: EditTransactionButtonProps) => {
  const [dialogIsOpen, setDiaLogIsOpen] = useState(false); // Controle do estado de visibilidade do diálogo

  return (
    <>
      {/* Botão para abrir o diálogo de edição da transação */}
      <Button
        variant="ghost"
        size={sizeButton}
        className={`text-muted-foreground ${className}`}
        onClick={() => setDiaLogIsOpen(true)} // Abre o diálogo
      >
        <PencilIcon />
      </Button>

      {/* Diálogo para editar a transação */}
      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDiaLogIsOpen}
        defaultValues={{
          ...transaction,
          amount: Number(transaction.amount),
          date: new Date(transaction.date),
        }}
        transactionId={transaction.id}
      />
    </>
  );
};

export default EditTransactionButton;
