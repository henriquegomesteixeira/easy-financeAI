import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { TransactionColumns } from "./_columns";
import AddTransactionButton from "../_components/add-transaction-button";
import Navbar from "../_components/navbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ScrollArea, ScrollBar } from "@/app/_components/ui/scroll-area";
import { canUserAddTransaction } from "../_data/can-user-add-transaction";

const TransactionsPage = async () => {
  const { userId } = await auth();

  // Redireciona para login caso o usuário não esteja autenticado
  if (!userId) {
    redirect("/login");
  }

  // Busca as transações do usuário autenticado
  const transactions = await db.transaction.findMany({
    where: {
      userId,
    },
    orderBy: {
      date: "desc",
    },
  });

  // Verifica se o usuário pode adicionar transações
  const userCanAddTransaction = await canUserAddTransaction();

  return (
    <>
      <Navbar />
      <div className="flex flex-col space-y-6 overflow-hidden lg:p-6">
        <div className="flex w-full items-center justify-between px-4 pt-6 lg:px-0 lg:pt-0">
          <h1 className="text-2xl font-bold">Transações</h1>
          {/* Exibe o botão de adicionar transação se o usuário tiver permissão */}
          <AddTransactionButton userCanAddTransaction={userCanAddTransaction} />
        </div>
        <ScrollArea className="h-full">
          {/* Exibe a tabela de transações */}
          <DataTable
            columns={TransactionColumns}
            data={JSON.parse(JSON.stringify(transactions))}
          />
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </>
  );
};

export default TransactionsPage;
