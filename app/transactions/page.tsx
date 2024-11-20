import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { TransactionColumns } from "./_columns";
import AddTransactionButton from "../_components/add-transaction-button";
import Navbar from "../_components/navbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ScrollArea, ScrollBar } from "@/app/_components/ui/scroll-area";
import { canUserAddTransaction } from "../_data/can-user-add-transaction";
import SwipeableItem from "./_components/swipeable-item";

const TransactionsPage = async () => {
  const { userId } = await auth();

  // Redireciona para a página de login se o usuário não estiver autenticado
  if (!userId) {
    redirect("/login");
  }

  // Busca todas as transações do usuário autenticado, ordenadas por data decrescente
  const transactions = await db.transaction.findMany({
    where: {
      userId,
    },
    orderBy: {
      date: "desc",
    },
  });

  // Verifica se o usuário tem permissão para adicionar novas transações
  const userCanAddTransaction = await canUserAddTransaction();

  return (
    <>
      {/* Navbar fixa na página */}
      <Navbar />
      <div className="flex flex-col space-y-6 p-6 xs:space-y-3 md:overflow-hidden">
        {/* Cabeçalho com título e botão de adicionar transação */}
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">Transações</h1>
          {/* Botão de adicionar transação visível apenas se o usuário tiver permissão */}
          <AddTransactionButton userCanAddTransaction={userCanAddTransaction} />
        </div>

        {/* Área de rolagem com tabela para visualização de transações em telas maiores */}
        <ScrollArea className="hidden h-full md:block">
          {/* Exibe a tabela de transações */}
          <DataTable
            columns={TransactionColumns}
            data={JSON.parse(JSON.stringify(transactions))} // Serialização para evitar problemas com tipos de dados não nativos
          />
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        {/* Componente para exibir transações como itens deslizáveis em telas menores */}
        <SwipeableItem
          transactions={JSON.parse(JSON.stringify(transactions))} // Serialização para evitar problemas com tipos de dados não nativos
        />
      </div>
    </>
  );
};

export default TransactionsPage;
