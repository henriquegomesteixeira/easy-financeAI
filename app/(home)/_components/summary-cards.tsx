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
  userCanAddTransaction?: boolean;
}

const SummaryCards = async ({
  balance,
  depositsTotal,
  expensesTotal,
  investmentsTotal,
  userCanAddTransaction,
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
        userCanAddTransaction={userCanAddTransaction}
      />

      <div className="grid grid-cols-2 grid-rows-2 gap-6 xl:grid-cols-3 xl:grid-rows-1">
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
            <div className="rounded-md bg-green-700 bg-opacity-20 p-2">
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
          className="col-span-2 xl:col-span-1"
        />
      </div>
    </div>
  );
};

export default SummaryCards;
