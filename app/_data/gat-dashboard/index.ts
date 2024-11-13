import { db } from "@/app/_lib/prisma";
import { TransactionType } from "@prisma/client";
import { TransactionPercentagePerType } from "./types";

const getDashboard = async (month: string) => {
  const currentYear = new Date().getFullYear();
  const where = {
    date: {
      gte: new Date(`${currentYear}-${month}-01T00:00:00`),
      lt: new Date(currentYear, Number(month), 0, 23, 59, 59),
    },
  };

  const depositsTotal = Number(
    (
      await db.transaction.aggregate({
        where: {
          ...where,
          type: "DEPOSIT",
        },
        _sum: {
          amount: true,
        },
      })
    )?._sum?.amount || 0,
  );
  const investmentsTotal = Number(
    (
      await db.transaction.aggregate({
        where: {
          ...where,
          type: "INVESTMENT",
        },
        _sum: {
          amount: true,
        },
      })
    )?._sum?.amount || 0,
  );
  const expensesTotal = Number(
    (
      await db.transaction.aggregate({
        where: {
          ...where,
          type: "EXPENSE",
        },
        _sum: {
          amount: true,
        },
      })
    )?._sum?.amount || 0,
  );
  const balance = depositsTotal - investmentsTotal - expensesTotal;

  const transactionsTotal = Number(
    (await db.transaction.aggregate({ where, _sum: { amount: true } }))._sum
      .amount,
  );

  const typesPercentage: TransactionPercentagePerType = {
    [TransactionType.DEPOSIT]: Math.round(
      (Number(depositsTotal || 0) / Number(transactionsTotal)) * 100,
    ),
    [TransactionType.EXPENSE]: Math.round(
      (Number(expensesTotal || 0) / Number(transactionsTotal)) * 100,
    ),
    [TransactionType.INVESTMENT]: Math.round(
      (Number(investmentsTotal || 0) / Number(transactionsTotal)) * 100,
    ),
  };

  return {
    depositsTotal,
    investmentsTotal,
    expensesTotal,
    balance,
    typesPercentage,
  };
};

export default getDashboard;
