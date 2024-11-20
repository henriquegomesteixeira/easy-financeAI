"use client";

import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import SwipeableTransactionItem from "./swipeable-transaction-item";
import { Decimal } from "@prisma/client/runtime/library";
import AlertHasData from "@/app/_components/ui/alert-has-data";

interface Transaction {
  userId: string;
  id: string;
  name: string;
  type: TransactionType;
  amount: Decimal;
  category: TransactionCategory;
  paymentMethod: TransactionPaymentMethod;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

interface SwipeableItemProps {
  transactions: Transaction[];
}

export default function SwipeableItem({ transactions }: SwipeableItemProps) {
  const hasData = transactions.length > 0; // Verifica se há transações para exibir

  return (
    <>
      {hasData ? (
        // Renderiza os itens da lista de transações
        transactions.map((transaction) => (
          <SwipeableTransactionItem
            key={transaction.id}
            transaction={{ ...transaction, amount: transaction.amount }}
          />
        ))
      ) : (
        // Exibe um alerta caso não existam transações
        <AlertHasData />
      )}
    </>
  );
}
