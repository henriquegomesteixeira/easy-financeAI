interface FormattedAmountProps {
  amount: number;
  type: "DEPOSIT" | "EXPENSE" | string;
}

export default function FormattedAmount({
  amount,
  type,
}: FormattedAmountProps) {
  // Define a cor do texto baseada no tipo da transação
  const color =
    type === "DEPOSIT"
      ? "text-green-500"
      : type === "EXPENSE"
        ? "text-red-500"
        : "text-gray-200";

  // Define o prefixo de acordo com o tipo da transação
  const prefix = type === "DEPOSIT" ? "+" : type === "EXPENSE" ? "-" : "-";

  return (
    <p className={`font-medium ${color}`}>
      {prefix}{" "}
      {new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(amount)}{" "}
      {/* Formata o valor para o padrão monetário BRL */}
    </p>
  );
}
