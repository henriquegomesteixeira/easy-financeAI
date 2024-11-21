"use client";

import { LineChart, Line, XAxis, CartesianGrid } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/app/_components/ui/chart";
import Decimal from "decimal.js";
import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";

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

// Configuração do gráfico
const chartConfig = {
  balance: {
    label: `Saldo`,
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const TransactionsLineChart = ({
  transactions,
}: {
  transactions: Transaction[];
}) => {
  // Ordena as transações por data
  const sortedTransactions = [...transactions].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

  // Calcula saldo acumulado e formata os dados para o gráfico
  let previousBalance = 0;
  const chartData = sortedTransactions.map((transaction) => {
    const amount = new Decimal(transaction.amount).toNumber(); // Converte Decimal para número
    const balance =
      transaction.type === "DEPOSIT"
        ? previousBalance + amount
        : previousBalance - amount;

    previousBalance = balance;

    return {
      date: new Date(transaction.date).toLocaleDateString("pt-BR"), // Formata a data
      balance,
      category: transaction.category, // Nome da categoria
    };
  });

  // Obtém o saldo final
  const finalBalance = previousBalance;

  return (
    <Card className="border-0 px-1 pt-1 md:hidden">
      {/* Cabeçalho com saldo total */}
      <CardHeader>
        <CardTitle>
          <span className="text-lg font-thin">Saldo Total:</span>
          <br />
          R$ {finalBalance.toFixed(2)}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Container do Gráfico */}
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis hide />
            {/* Tooltip customizado */}
            <ChartTooltip
              cursor={false}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const { date, balance } = payload[0].payload;
                  return (
                    <div className="custom-tooltip flex items-center justify-center gap-2 rounded-md border bg-black px-2 py-1">
                      <div className="h-[10px] w-[10px] rounded-[2px] bg-primary"></div>
                      <div className="font-normal text-stone-400">{date}</div>
                      <div className="font-bold">
                        <span className="font-medium">R$</span>{" "}
                        {balance.toFixed(2)}
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            {/* Linha do gráfico */}
            <Line
              dataKey="balance"
              type="natural"
              stroke="hsl(var(--chart-1))"
              strokeWidth={2}
              dot={{
                fill: "hsl(var(--chart-1))",
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export { TransactionsLineChart };
