"use client";

import { Transaction } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import TransactionTypeBadge from "../_components/type-badge";
import {
  TRANSACTION_CATEGORY_LABELS,
  TRANSACTION_PAYMENT_METHOD_LABELS,
} from "@/app/_constants/transactions";
import EditTransactionButton from "../_components/edit-transaction-button";
import TransactionIcon from "../_components/transaction-icon";
import DeleteTransactionbutton from "../_components/delete-transaction-button";

// Definição das colunas para a tabela
export const TransactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome ",
    cell: ({ row: { original: transaction } }) => (
      <div className="flex items-center space-x-3">
        {/* Ícone associado à categoria */}
        <TransactionIcon category={transaction.category} />
        <span className="whitespace-nowrap">{transaction.name}</span>
      </div>
    ),
  },
  {
    accessorKey: "type",
    header: "Tipo ",
    cell: ({ row: { original: transaction } }) => (
      <TransactionTypeBadge transaction={transaction} />
    ),
  },
  {
    accessorKey: "amount",
    header: "Valor ",
    sortingFn: (rowA, rowB) => {
      // Converte para número antes de comparar
      const amountA = parseFloat(rowA.original.amount.toString() || "0");
      const amountB = parseFloat(rowB.original.amount.toString() || "0");
      return amountA - amountB;
    },
    cell: ({ row: { original: transaction } }) =>
      // Formata o valor como moeda em BRL
      new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(transaction.amount)),
  },
  {
    accessorKey: "category",
    header: "Categoria ",
    cell: ({ row: { original: transaction } }) =>
      TRANSACTION_CATEGORY_LABELS[transaction.category],
  },
  {
    accessorKey: "paymentMethod",
    header: "Métod ",
    cell: ({ row: { original: transaction } }) => (
      <span className="whitespace-nowrap">
        {TRANSACTION_PAYMENT_METHOD_LABELS[transaction.paymentMethod]}
      </span>
    ),
  },
  {
    accessorKey: "date",
    header: "Data ",
    enableSorting: true,
    sortingFn: "datetime", // Ordenação de datas
    cell: ({ row: { original: transaction } }) => (
      <span className="whitespace-nowrap">
        {new Date(transaction.date).toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })}
      </span>
    ),
  },
  {
    accessorKey: "actions",
    header: "",
    cell: ({ row: { original: transaction } }) => (
      <div className="flex flex-nowrap space-x-1 text-nowrap">
        {/* Botões de editar e excluir */}
        <EditTransactionButton transaction={transaction} />
        <DeleteTransactionbutton transactionId={transaction.id} />
      </div>
    ),
  },
];
