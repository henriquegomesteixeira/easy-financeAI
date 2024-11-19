import { z } from "zod";

// Define o esquema de validação para deletar uma transação
export const deleteTransactionSchema = z.object({
  transactionId: z.string().uuid(), // O ID da transação deve ser uma string no formato UUID
});

// Tipagem derivada do esquema para uso no código
export type DeleteTransactionSchema = z.infer<typeof deleteTransactionSchema>;
