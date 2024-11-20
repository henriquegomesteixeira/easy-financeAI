import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/app/_components/ui/alert-dialog";
import { Button } from "@/app/_components/ui/button";
import { Trash2 } from "lucide-react";
import { deleteTransaction } from "../_actions/delete-transaction"; // Função para excluir a transação no backend
import { toast } from "sonner"; // Biblioteca para exibição de notificações

interface DeleteTransactionbuttonProps {
  transactionId: string;
  className?: string;
  sizeButton?: "icon" | "default" | "sm" | "lg" | null | undefined; // Tamanho do botão
}

const DeleteTransactionbutton = ({
  transactionId,
  className,
  sizeButton = "icon",
}: DeleteTransactionbuttonProps) => {
  // Função executada ao confirmar a exclusão
  const handleConfirmDeleteClick = async () => {
    try {
      await deleteTransaction({ transactionId }); // Remove a transação no backend
      toast.success("Transação deletada com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error("Ocorreu um erro ao deletar a transação.");
    }
  };

  return (
    <AlertDialog>
      {/* Botão que dispara o diálogo de confirmação */}
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          size={sizeButton}
          className={`p-0 text-muted-foreground ${className}`}
        >
          <Trash2 />
        </Button>
      </AlertDialogTrigger>

      {/* Conteúdo do diálogo de confirmação */}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Você deseja realmente deletar essa transação?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Essa ação não pode ser desfeita.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          {/* Botão para confirmar a exclusão */}
          <AlertDialogAction onClick={handleConfirmDeleteClick}>
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteTransactionbutton;
