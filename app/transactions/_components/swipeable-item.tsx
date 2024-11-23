"use client";

import { useState } from "react";
import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import SwipeableTransactionItem from "./swipeable-transaction-item";
import Decimal from "decimal.js";
import AlertHasData from "@/app/_components/ui/alert-has-data";
import { Search } from "lucide-react";

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

// Mapeamento de categorias e métodos de pagamento
const categoryMap: Record<string, string> = {
  HOUSING: "Moradia",
  TRANSPORTATION: "Transporte",
  FOOD: "Alimentação",
  ENTERTAINMENT: "Entretenimento",
  HEALTH: "Saúde",
  UTILITY: "Utilidades",
  SALARY: "Salário",
  EDUCATION: "Educação",
  OTHER: "Outros",
};

const paymentMethodMap: Record<string, string> = {
  CREDIT_CARD: "Cartão de crédito",
  DEBIT_CARD: "Cartão de débito",
  BANK_TRANSFER: "Transferência bancária",
  BANK_SLIP: "Boleto bancário",
  CASH: "Dinheiro",
  PIX: "PIX",
  OTHER: "Outros",
};

export default function SwipeableItem({ transactions }: SwipeableItemProps) {
  const [searchQuery, setSearchQuery] = useState(""); // Estado para armazenar o texto da busca

  // Função para filtrar as transações com base no texto digitado
  const filteredTransactions = transactions.filter((transaction) => {
    const query = searchQuery.toLowerCase(); // Convertendo a busca para minúscula para comparação

    // Função que retorna a versão em português de categoria e método de pagamento
    const getCategoryInPortuguese = (category: TransactionCategory) => {
      return categoryMap[category] ? categoryMap[category].toLowerCase() : "";
    };

    const getPaymentMethodInPortuguese = (
      paymentMethod: TransactionPaymentMethod,
    ) => {
      return paymentMethodMap[paymentMethod]
        ? paymentMethodMap[paymentMethod].toLowerCase()
        : "";
    };

    // Verifica se algum campo contém o texto de pesquisa
    return (
      transaction.name.toLowerCase().includes(query) ||
      getCategoryInPortuguese(transaction.category).includes(query) ||
      transaction.amount.toString().includes(query) || // Convertendo Decimal para string
      new Date(transaction.date).toLocaleDateString().includes(query) || // Garantindo que a data seja um objeto Date
      getPaymentMethodInPortuguese(transaction.paymentMethod).includes(query)
    );
  });

  const hasData = filteredTransactions.length > 0;

  return (
    <div className="md:hidden">
      {/* Barra de pesquisa */}
      <div className="mb-4 flex w-full items-center rounded-full border bg-stone-900 px-4 py-2">
        <input
          type="text"
          placeholder="Pesquisar transações..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="text w-full bg-stone-900 focus:outline-none"
        />
        <Search className="cursor-pointer text-gray-400" size={20} />
      </div>

      {/* Lista de transações ou alerta */}
      {hasData ? (
        filteredTransactions.map((transaction) => (
          <SwipeableTransactionItem
            key={transaction.id}
            transaction={{ ...transaction, amount: transaction.amount }}
          />
        ))
      ) : (
        <AlertHasData />
      )}
    </div>
  );
}
