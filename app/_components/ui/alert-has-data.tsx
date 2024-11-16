import { AlertCircle } from "lucide-react";

const AlertHasData = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 py-20 text-center">
      <AlertCircle className="h-10 w-10 text-gray-600" />
      <p className="max-w-[400px] break-words text-sm text-gray-600">
        Nenhuma transação registrada ainda. Crie sua primeira transação para
        analisar os insights.
      </p>
    </div>
  );
};

export default AlertHasData;
