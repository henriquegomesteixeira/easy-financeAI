"use client";

import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import TransactionIcon from "./transaction-icon";
import {
  TRANSACTION_CATEGORY_LABELS,
  TRANSACTION_PAYMENT_METHOD_LABELS,
} from "@/app/_constants/transactions";
import { EllipsisVertical } from "lucide-react";
import EditTransactionButton from "./edit-transaction-button";
import DeleteTransactionbutton from "./delete-transaction-button";
import { Transaction } from "@prisma/client";
import FormattedAmount from "./formatted-amount-props";

interface SwipeableTransactionItemProps {
  transaction: Transaction;
}

export default function SwipeableTransactionItem({
  transaction,
}: SwipeableTransactionItemProps) {
  const [isSwiped, setIsSwiped] = useState(false); // Controla o estado do swipe (deslize)

  const handlers = useSwipeable({
    onSwipedLeft: () => setIsSwiped(true), // Exibe ações ao deslizar para a esquerda
    onSwipedRight: () => setIsSwiped(false), // Oculta ações ao deslizar para a direita
    preventScrollOnSwipe: true, // Previne o scroll ao detectar swipe
    trackMouse: true, // Habilita suporte para eventos de mouse
  });

  return (
    <div
      {...handlers}
      className="relative mx-auto mb-4 w-full overflow-hidden rounded-lg border bg-background shadow md:hidden"
    >
      {/* Conteúdo Principal */}
      <div
        className={`content flex transform flex-col gap-4 transition-transform duration-300 xs:flex-row xs:justify-between xs:py-4 ${
          isSwiped ? "-translate-x-14" : "translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between px-4 pt-3 xs:flex-row-reverse xs:justify-normal xs:gap-3 xs:pt-0">
          <div>
            <p className="whitespace-nowrap font-bold">{transaction.name}</p>
            <div className="flex gap-2">
              <p className="whitespace-nowrap rounded-sm text-xs text-stone-400">
                {[TRANSACTION_CATEGORY_LABELS[transaction.category]]}
              </p>
              <p className="whitespace-nowrap rounded-sm text-xs text-stone-400">
                {[TRANSACTION_PAYMENT_METHOD_LABELS[transaction.paymentMethod]]}
              </p>
            </div>
          </div>
          {/* Ícone que representa a categoria da transação */}
          <TransactionIcon category={transaction.category} />
        </div>

        <div className="flex justify-between bg-stone-900 px-4 py-2 xs:bg-background xs:py-0">
          <div>
            {/* Valor formatado da transação */}
            <FormattedAmount
              amount={Number(transaction.amount)}
              type={transaction.type}
            />
            <p className="whitespace-nowrap text-xs text-stone-400">
              {new Date(transaction.date).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "2-digit",
              })}
            </p>
          </div>
          {/* Botão para alternar exibição de ações */}
          <button
            onClick={() => setIsSwiped(!isSwiped)}
            className="px-[10px] xs:ml-4"
          >
            <EllipsisVertical size={20} />
          </button>
        </div>
      </div>

      {/* Ações (Editar/Excluir) */}
      <div
        className={`absolute bottom-0 right-0 top-0 flex w-16 items-center justify-center border border-l-0 bg-red-500 text-white xs:w-24 ${
          isSwiped ? "translate-x-0" : "translate-x-full"
        } delete-action transition-transform duration-300`}
      >
        {/* Bordas arredondadas para integrar o layout */}
        <div className="absolute left-0 top-0 h-[55%] w-[10%] rounded-tr-md bg-background"></div>
        <div className="absolute bottom-0 left-0 h-[45%] w-[10%] rounded-br-md bg-stone-900 xs:bg-background"></div>
        <div className="flex flex-col flex-nowrap items-center justify-center gap-9 text-nowrap xs:flex-row xs:gap-0">
          {/* Botão de edição */}
          <EditTransactionButton
            transaction={transaction}
            className="ml-2 p-2 text-white"
            sizeButton={null}
          />
          {/* Botão de exclusão */}
          <DeleteTransactionbutton
            transactionId={transaction.id}
            className="ml-2 p-2 text-white"
            sizeButton={null}
          />
        </div>
      </div>
    </div>
  );
}
