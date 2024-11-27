![Logo](/public/logo.svg)

**Easy FinanceAi** é uma aplicação web projetada para simplificar o gerenciamento financeiro pessoal. A plataforma combina um dashboard intuitivo com gráficos interativos e relatórios personalizados gerados por **inteligência artificial**, oferecendo aos usuários insights avançados sobre suas finanças. Com um sistema seguro de login via **Clerk**, os usuários podem gerenciar receitas, despesas e investimentos detalhadamente, além de escolher entre planos gratuito ou premium, adaptados às suas necessidades.

---

### **Índice**
1. [Introdução](#Introdução)
2. [Tecnologias Principais](#tecnologias-principais)
3. [Tecnologias de Suporte](#tecnologias-de-suporte)
 
---

### **Introdução**
O **Easy FinanceAi** é uma plataforma web responsiva desenvolvida para ajudar os usuários a organizarem suas finanças e planejarem seu futuro financeiro de forma prática e eficiente. Focado exclusivamente em finanças pessoais, o site oferece uma interface simples e intuitiva, baseada em princípios modernos de **UI/UX design**. Seu principal diferencial é a geração de relatórios financeiros personalizados utilizando o **ChatGPT-4**, que fornece análises detalhadas e conselhos úteis para o planejamento financeiro.

Totalmente acessível através de navegadores, o Easy FinanceAi garante uma experiência personalizada, permitindo que os usuários façam login com Gmail, Microsoft, Apple ou e-mail e senha. No futuro, o projeto planeja expandir suas funcionalidades com uma ferramenta de planejamento financeiro mensal, onde os usuários poderão definir metas de gastos fixos para todos os meses.

---

### **Funcionalidades Principais**
#### 1. **Autenticação Segura e Personalização**
- Login utilizando Gmail, Microsoft, Apple ou e-mail e senha, gerenciado por **Clerk**.
- Cada usuário possui uma conta única, com seus próprios dados financeiros armazenados de forma segura.

#### 2. **Dashboard Intuitivo**
- Resumo financeiro do mês, exibindo:
  - **Saldo** atual.
  - **Investimentos**, **receitas** e **despesas**.
- Gráficos interativos, incluindo:
  - Receita mensal.
  - Despesas mensais.
  - Investimentos realizados.
  - Gastos categorizados.
- Histórico das últimas transações.
- **Filtro de meses**, permitindo visualizar dados financeiros de períodos específicos.
- **Relatórios financeiros gerados por IA**:
  - Utiliza os dados financeiros do usuário para fornecer recomendações práticas e personalizadas, ajudando a organizar melhor as finanças.

#### 3. **Gerenciamento de Transações**
- Página dedicada ao gerenciamento de transações, com:
  - Tabela completa de todas as transações registradas.
  - Opções para **editar** ou **excluir** transações.
  - Detalhes incluídos em cada registro:
    - Nome.
    - Tipo (despesa, investimento ou depósito).
    - Valor.
    - Categoria.
    - Método de pagamento.
    - Data.

#### 4. **Planos de Assinatura**
- **Plano Básico** (gratuito):
  - Até **10 transações**.
  - **3 relatórios** gerados por IA por mês.
- **Plano Premium**:
  - Transações e relatórios ilimitados.
  - Ideal para usuários com maior volume financeiro ou necessidade de análises frequentes.

#### 5. **Expansões Futuras**
- Planejamento financeiro mensal:
  - Funcionalidade em desenvolvimento que permitirá definir metas de gastos fixos mensais, ajudando no controle e no alcance de objetivos financeiros.

---

### **Tecnologias Principais**
- [**Next.js 14**](https://nextjs.org/): Framework React para aplicações full-stack, com renderização no servidor e páginas estáticas.
- [**TypeScript**](https://www.typescriptlang.org/): Tipagem estática para maior segurança e escalabilidade.
- [**Tailwind CSS**](https://tailwindcss.com/): Framework de estilos utilitários para criar interfaces responsivas.
- [**ShadCN**](https://ui.shadcn.com/): Biblioteca de componentes UI integrada ao Tailwind CSS.
- [**Prisma**](https://www.prisma.io/): ORM para bancos de dados relacionais, usado com **PostgreSQL**.
- [**PostgreSQL**](https://www.postgresql.org/): Banco de dados relacional para armazenamento seguro de informações financeiras.
- [**Clerk**](https://clerk.dev/): Sistema de autenticação e gerenciamento de usuários.

### **Tecnologias de Suporte**

#### **Funcionalidade**

- [**Stripe**](https://stripe.com/): Processamento de pagamentos com cartão de crédito.
- [**React Hook Form**](https://react-hook-form.com/): Biblioteca de formulários com validação eficiente.
- [**Recharts**](https://recharts.org/): Biblioteca para gráficos interativos.
- [**OpenAI**](https://openai.com/): Integração com a API GPT-4 para relatórios financeiros baseados em IA.

#### **Qualidade e Automação**

- [**ESLint**](https://eslint.org/): Linting para qualidade e consistência de código.
- [**Prettier**](https://prettier.io/): Formatação automática de código.
- [**Husky**](https://typicode.github.io/husky/): Hooks do Git para automação de tarefas.
- [**Lint-Staged**](https://github.com/okonet/lint-staged): Linting otimizado para arquivos modificados.
