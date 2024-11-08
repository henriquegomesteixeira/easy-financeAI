// components/TransactionIcon.tsx
import { Transaction } from "@prisma/client";
import {
  Utensils,
  ShoppingCart,
  Home,
  Car,
  HelpCircle,
  GraduationCap,
  Film,
  Wrench,
  Heart,
} from "lucide-react";

type CategoryIconProps = {
  category: Transaction["category"];
};

const categoryStyles: Record<
  Transaction["category"],
  { icon: React.ElementType; color: string }
> = {
  FOOD: { icon: Utensils, color: "bg-orange-200 text-orange-700" },
  TRANSPORTATION: { icon: Car, color: "bg-blue-200 text-blue-700" },
  HOUSING: { icon: Home, color: "bg-green-200 text-green-700" },
  SALARY: { icon: ShoppingCart, color: "bg-purple-200 text-purple-700" },
  OTHER: { icon: HelpCircle, color: "bg-gray-200 text-gray-700" },
  ENTERTAINMENT: { icon: Film, color: "bg-pink-200 text-pink-700" },
  HEALTH: { icon: Heart, color: "bg-red-200 text-red-700" },
  UTILITY: { icon: Wrench, color: "bg-gray-200 text-gray-700" },
  EDUCATION: { icon: GraduationCap, color: "bg-yellow-200 text-yellow-700" },
};

const TransactionIcon: React.FC<CategoryIconProps> = ({ category }) => {
  const { icon: Icon, color } = categoryStyles[category];

  return (
    <div
      className={`flex min-h-10 min-w-10 items-center justify-center rounded-full ${color}`}
    >
      <Icon size={20} />
    </div>
  );
};

export default TransactionIcon;
