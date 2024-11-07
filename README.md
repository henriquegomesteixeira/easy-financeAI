# Finance Ai
Finance Ai é um SaaS de gestão financeira que utiliza inteligência artificial para auxiliar no gerenciamento de finanças pessoais e corporativas. O projeto é desenvolvido com Next.js 14, TypeScript e Tailwind CSS.

## Tecnologias Principais
- **Next.js 14**: Framework React para desenvolvimento frontend.
- **TypeScript**: Adiciona tipagem estática ao JavaScript, melhorando a segurança do código.
- **Tailwind CSS**: Framework de estilos utilitário.
- **ShadCN**: Conjunto de componentes UI prontos para uso, integrados ao Tailwind CSS, para facilitar a construção da interface do usuário.
- **Prisma**: ORM para interagir com o banco de dados PostgreSQL.
- **PostgreSQL**: Banco de dados relacional.
- **Clerk**: Sistema de autenticação e gerenciamento de usuários.

## Tecnologias de Suporte ao Desenvolvimento
- **Husky**: Ferramenta para criar hooks de Git, garantindo que scripts sejam executados antes de ações de commit ou push.
- **lint-staged**: Executa linters apenas nos arquivos que foram staged no Git, melhorando a eficiência durante os commits.
- **ESLint**: Ferramenta de linting para manter a qualidade do código.
- **Prettier** (com `prettier-plugin-tailwindcss`): Formatação automática de código e ordenação de classes CSS do Tailwind.
- **git-commit-msg-linter**: Linter para padronizar mensagens de commit.

## Estrutura Inicial do Banco de Dados
O modelo `Transaction` é a base de armazenamento das transações financeiras:

```prisma
model Transaction {
  id            String                   @id @default(uuid())
  name          String
  type          TransactionType
  amount        Decimal                  @db.Decimal(10, 2)
  category      TransactionCategory
  paymentMethod TransactionPaymentMethod
  date          DateTime
  createdAt     DateTime                 @default(now())
  updatedAt     DateTime                 @updatedAt
}
enum TransactionType {
  DEPOSIT
  EXPENSE
  INVESTMENT
}
enum TransactionCategory {
  HOUSING
  TRANSPORTATION
  FOOD
  ENTERTAINMENT
  HEALTH
  UTILITY
  SALARY
  EDUCATION
  OTHER
}
enum TransactionPaymentMethod {
  CREDIT_CARD
  DEBIT_CARD
  BANK_TRANSFER
  BANK_SLIP
  CASH
  PIX
  OTHER
}
```

- **`TransactionType`**: Define os tipos possíveis de transação, como depósito, despesa e investimento.
- **`TransactionCategory`**: Categoriza a transação, como moradia, alimentação, saúde, etc.
- **`TransactionPaymentMethod`**: Enumera os métodos de pagamento possíveis, incluindo cartão de crédito, transferência bancária e PIX.
