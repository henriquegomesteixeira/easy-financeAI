import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

// Componente para exibir um badge indicando o tipo de transação
const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgeProps) => {
  if (transaction.type == TransactionType.DEPOSIT) {
    return (
      // Badge para transações do tipo "Depósito"
      <Badge className="bg-green-800 bg-opacity-20 font-bold text-primary hover:bg-green-800 hover:bg-opacity-20">
        <CircleIcon className="mr-2 fill-primary" size={10} />
        Depósito
      </Badge>
    );
  }

  if (transaction.type == TransactionType.EXPENSE) {
    return (
      // Badge para transações do tipo "Despesa"
      <Badge className="bg-red-600 bg-opacity-10 font-bold text-red-500 hover:bg-red-600 hover:bg-opacity-10">
        <CircleIcon className="mr-2 fill-red-600" size={10} />
        Despesa
      </Badge>
    );
  }

  // Badge para transações do tipo "Investimento"
  return (
    <Badge className="bg-white bg-opacity-10 font-bold text-white hover:bg-white hover:bg-opacity-10">
      <CircleIcon className="mr-2 fill-white" size={10} />
      Investimento
    </Badge>
  );
};

export default TransactionTypeBadge;
