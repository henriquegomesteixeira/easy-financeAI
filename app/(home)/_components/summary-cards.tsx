import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SummaryCard from "./summary-card";

interface SummaryCards {
  month: string;
  balance: number;
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
}

const SummaryCards = async ({
  balance,
  depositsTotal,
  expensesTotal,
  investmentsTotal,
}: SummaryCards) => {
  return (
    <div className="space-y-6">
      <SummaryCard
        icon={
          <div className="rounded-md bg-black p-2">
            <WalletIcon size={16} />
          </div>
        }
        title="Saldo"
        amount={balance}
        size="large"
        className="bg-popover"
      />

      <div className="grid grid-cols-3 gap-6">
        <SummaryCard
          icon={
            <div className="rounded-md bg-zinc-800 p-2">
              <PiggyBankIcon size={16} />
            </div>
          }
          title="Investido"
          amount={investmentsTotal}
          className="bg-popover"
        />
        <SummaryCard
          icon={
            <div className="rounded-md bg-green-800 bg-opacity-20 p-2">
              <TrendingUpIcon size={16} className="text-primary" />
            </div>
          }
          title="Receita"
          amount={depositsTotal}
        />
        <SummaryCard
          icon={
            <div className="rounded-md bg-red-700 bg-opacity-20 p-2">
              <TrendingDownIcon size={16} className="text-red-500" />
            </div>
          }
          title="Despesas"
          amount={expensesTotal}
        />
      </div>
    </div>
  );
};

export default SummaryCards;
