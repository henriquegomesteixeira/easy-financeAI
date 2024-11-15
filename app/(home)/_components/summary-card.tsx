import AddTransactionButton from "@/app/_components/add-transaction-button";
import { Card, CardHeader, CardContent } from "@/app/_components/ui/card";
import { ReactNode } from "react";

interface SummaryCardProps {
  icon: ReactNode;
  title: string;
  amount: number;
  size?: "small" | "large";
  className?: string;
  userCanAddTransaction?: boolean;
}

const SummaryCard = ({
  icon,
  title,
  amount,
  size = "small",
  className = "",
  userCanAddTransaction,
}: SummaryCardProps) => {
  return (
    <Card className={className}>
      <CardHeader className="flex-row items-center gap-2 sm:gap-4">
        {icon}
        <p
          className={
            size === "small" ? "text-muted-foreground" : "text-white opacity-70"
          }
        >
          {title}
        </p>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <p
          className={`font-bold ${size === "small" ? "text-lg sm:text-2xl" : "text-lg sm:text-4xl"}`}
        >
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(amount)}
        </p>

        {size === "large" && (
          <AddTransactionButton userCanAddTransaction={userCanAddTransaction} />
        )}
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
