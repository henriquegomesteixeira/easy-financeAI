# ![Logo](/public/logo.svg)

**Easy FinanceAi** é uma aplicação web projetada para simplificar o gerenciamento financeiro pessoal. A plataforma combina um dashboard intuitivo com gráficos interativos e relatórios personalizados gerados por **inteligência artificial**, oferecendo aos usuários insights avançados sobre suas finanças. Com um sistema seguro de login via **Clerk**, os usuários podem gerenciar receitas, despesas e investimentos detalhadamente, além de escolher entre planos gratuito ou premium, adaptados às suas necessidades.

![Capa](/public/Capa.png)

## **Índice**

- [](#)
  - [**Índice**](#índice)
  - [**Introdução**](#introdução)
  - [**Funcionalidades Principais**](#funcionalidades-principais)
    - [**1. Autenticação Segura e Personalização**](#1-autenticação-segura-e-personalização)
    - [**2. Dashboard Intuitivo**](#2-dashboard-intuitivo)
    - [**3. Gerenciamento de Transações**](#3-gerenciamento-de-transações)
    - [**4. Planos de Assinatura**](#4-planos-de-assinatura)
  - [**Tecnologias Principais**](#tecnologias-principais)
  - [**Tecnologias de Suporte**](#tecnologias-de-suporte)
    - [**Funcionalidade**](#funcionalidade)
    - [**Qualidade e Automação**](#qualidade-e-automação)
  - [**Configuração do Projeto Easy FinanceAi**](#configuração-do-projeto-easy-financeai)
    - [**Pré-requisitos**](#pré-requisitos)
    - [**Passo 1: Clonar o Repositório**](#passo-1-clonar-o-repositório)
    - [**Passo 2: Instalar Dependências**](#passo-2-instalar-dependências)
    - [**Passo 3: Configurar Variáveis de Ambiente**](#passo-3-configurar-variáveis-de-ambiente)
    - [**Passo 4: Configurar o Banco de Dados**](#passo-4-configurar-o-banco-de-dados)
      - [Opção 1: Usar Banco de Dados Remoto](#opção-1-usar-banco-de-dados-remoto)
      - [Opção 2: Usar Docker para Banco de Dados Local](#opção-2-usar-docker-para-banco-de-dados-local)
      - [**1. Instalar o Docker**](#1-instalar-o-docker)
      - [**2. Verificar a Instalação**](#2-verificar-a-instalação)
      - [**3. Criar o Arquivo `docker-compose.yml`**](#3-criar-o-arquivo-docker-composeyml)
      - [**4. Subir o Container do Banco de Dados**](#4-subir-o-container-do-banco-de-dados)
      - [**5. Verificar o Container**](#5-verificar-o-container)
      - [**6. Configurar o Arquivo `.env`**](#6-configurar-o-arquivo-env)
      - [**7. Migrar o Banco de Dados**](#7-migrar-o-banco-de-dados)
      - [**8. Visualizar o Banco de Dados**](#8-visualizar-o-banco-de-dados)
      - [**Comandos Úteis**](#comandos-úteis)
    - [**Passo 5: Configurar o Prisma**](#passo-5-configurar-o-prisma)
    - [**Passo 6: Rodar o Servidor de Desenvolvimento**](#passo-6-rodar-o-servidor-de-desenvolvimento)
    - [**Passo 7: Configuração de Webhooks**](#passo-7-configuração-de-webhooks)
  - [**Arquitetura do Projeto Easy FinanceAi**](#arquitetura-do-projeto-easy-financeai)
    - [**1. Estrutura Geral do Projeto**](#1-estrutura-geral-do-projeto)
    - [**2. Detalhes do Diretório `app/`**](#2-detalhes-do-diretório-app)
    - [**3. `app/api/`**](#3-appapi)
    - [**4. `app/_components/`**](#4-app_components)

## **Introdução**

O **Easy FinanceAi** é uma plataforma web responsiva desenvolvida para ajudar os usuários a organizarem suas finanças e planejarem seu futuro financeiro de forma prática e eficiente. Focado exclusivamente em finanças pessoais, o site oferece uma interface simples e intuitiva, baseada em princípios modernos de **UI/UX design**. Seu principal diferencial é a geração de relatórios financeiros personalizados utilizando o **ChatGPT-4**, que fornece análises detalhadas e conselhos úteis para o planejamento financeiro.

Totalmente acessível através de navegadores, o Easy FinanceAi garante uma experiência personalizada, permitindo que os usuários façam login com Gmail, Microsoft, Apple ou e-mail e senha. No futuro, o projeto planeja expandir suas funcionalidades com uma ferramenta de planejamento financeiro mensal, onde os usuários poderão definir metas de gastos fixos para todos os meses.

## **Funcionalidades Principais**

### **1. Autenticação Segura e Personalização**

Acesse a plataforma com facilidade e segurança:

- Login via Gmail, Microsoft, Apple ou e-mail e senha.
- Gerenciamento de usuários com **Clerk**, garantindo contas exclusivas e dados financeiros seguros.

---

### **2. Dashboard Intuitivo**

Monitore suas finanças de maneira prática e visual:

- **Resumo Financeiro Mensal:** Saldo atual, receitas, despesas e investimentos.
- **Gráficos Interativos:** Veja a evolução financeira com:
  - Receita e despesas mensais.
  - Investimentos realizados.
  - Gastos categorizados.
- **Histórico de Transações:** Acompanhe as últimas movimentações.
- **Relatórios com IA:**
  - Geração automática de relatórios personalizados usando **ChatGPT-4**.
  - Receba insights financeiros e recomendações práticas para organizar suas finanças.
- **Filtro de Mês:** Escolha períodos específicos para análises detalhadas.

---

### **3. Gerenciamento de Transações**

Tenha total controle sobre suas movimentações financeiras:

- Visualize todas as transações em uma tabela detalhada.
- Edite ou exclua registros facilmente.
- Dados disponíveis em cada transação:
  - Nome, tipo (despesa, investimento ou depósito), valor, categoria, método de pagamento e data.

---

### **4. Planos de Assinatura**

Escolha o plano que atende às suas necessidades financeiras:

- **Plano Básico (Gratuito):**
  - Até **10 transações mensais**.
  - **3 relatórios com IA** por mês.
- **Plano Premium:**
  - Transações e relatórios ilimitados.
  - Ideal para quem gerencia volumes maiores de dados financeiros.

## **Tecnologias Principais**

- [**Next.js 14**](https://nextjs.org/): Framework React para aplicações full-stack, com renderização no servidor e páginas estáticas.
- [**TypeScript**](https://www.typescriptlang.org/): Tipagem estática para maior segurança e escalabilidade.
- [**Tailwind CSS**](https://tailwindcss.com/): Framework de estilos utilitários para criar interfaces responsivas.
- [**ShadCN**](https://ui.shadcn.com/): Biblioteca de componentes UI integrada ao Tailwind CSS.
- [**Prisma**](https://www.prisma.io/): ORM para bancos de dados relacionais, usado com **PostgreSQL**.
- [**PostgreSQL**](https://www.postgresql.org/): Banco de dados relacional para armazenamento seguro de informações financeiras.
- [**Clerk**](https://clerk.dev/): Sistema de autenticação e gerenciamento de usuários.

## **Tecnologias de Suporte**

### **Funcionalidade**

- [**Docker**](https://www.docker.com/): Usado no ambiente de desenvolvimento para configurar um banco de dados PostgreSQL local de forma rápida e consistente.
- [**Stripe**](https://stripe.com/): Processamento de pagamentos com cartão de crédito.
- [**React Hook Form**](https://react-hook-form.com/): Biblioteca de formulários com validação eficiente.
- [**Recharts**](https://recharts.org/): Biblioteca para gráficos interativos.
- [**OpenAI**](https://openai.com/): Integração com a API GPT-4 para relatórios financeiros baseados em IA.

### **Qualidade e Automação**

- [**ESLint**](https://eslint.org/): Linting para qualidade e consistência de código.
- [**Prettier**](https://prettier.io/): Formatação automática de código.
- [**Husky**](https://typicode.github.io/husky/): Hooks do Git para automação de tarefas.
- [**Lint-Staged**](https://github.com/okonet/lint-staged): Linting otimizado para arquivos modificados.

## **Configuração do Projeto Easy FinanceAi**

Esta seção explica como configurar e executar o projeto localmente. Siga os passos abaixo para garantir o funcionamento correto da aplicação.

### **Pré-requisitos**

Certifique-se de ter os seguintes itens instalados na sua máquina:

- [Node.js](https://nodejs.org/) (v18+)
- [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/) (Para utilizar um serviço de hospedagem de banco de dados remoto)
- [Docker](https://www.docker.com/) (Para configurar o banco de dados localmente)

---

### **Passo 1: Clonar o Repositório**

Faça o clone do repositório para sua máquina local:

```bash
git clone git@github.com:henriquegomesteixeira/easy-financeAI.git
cd easy-financeAI
```

---

### **Passo 2: Instalar Dependências**

Instale as dependências necessárias do projeto:

```bash
npm install
```

---

### **Passo 3: Configurar Variáveis de Ambiente**

Crie um arquivo `.env` na raiz do projeto e adicione as variáveis de ambiente necessárias. Você pode usar o arquivo de exemplo para facilitar a configuração:

```bash
cp .env.example .env
```

Preencha o arquivo `.env` com as chaves apropriadas. Exemplo:

```plaintext
# PostgreSQL
DATABASE_URL="postgresql://seu_usuario:senha@seu_host/seu_banco?sslmode=require"

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="sua_clerk_public_key"
CLERK_SECRET_KEY="sua_clerk_secret_key"

# Stripe
STRIPE_PREMIUM_PLAN_PRICE_ID="price_id_do_stripe"
STRIPE_SECRET_KEY="sua_stripe_secret_key"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="sua_stripe_public_key"
STRIPE_WEBHOOK_SECRET="seu_stripe_webhook_secret"
NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL="url_do_portal_do_cliente"

# OpenAI
OPENAI_API_KEY="sua_openai_api_key"

# URL da aplicação
APP_URL="http://localhost:3000"
```

---

### **Passo 4: Configurar o Banco de Dados**

#### Opção 1: Usar Banco de Dados Remoto

Se estiver usando um serviço de hospedagem, como Neon ou Supabase, configure a variável `DATABASE_URL` no arquivo `.env` com a URL fornecida pelo serviço.

#### Opção 2: Usar Docker para Banco de Dados Local

#### **1. Instalar o Docker**

Certifique-se de ter o Docker instalado no seu computador.

- [Instale o Docker Desktop](https://www.docker.com/products/docker-desktop/) e siga as instruções do site oficial.

#### **2. Verificar a Instalação**

Após a instalação, verifique se o Docker e o Docker Compose estão funcionando. Execute no terminal:

```bash
docker --version
docker compose version
```

#### **3. Criar o Arquivo `docker-compose.yml`**

No diretório do projeto, crie o arquivo `docker-compose.yml` com o seguinte conteúdo:

```yaml
version: "3.8"
services:
  postgres:
    image: postgres:15-alpine
    container_name: easyfinanceai-postgres
    restart: always
    environment:
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: admin
      POSTGRES_DB: easyfinanceai
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
volumes:
  postgres_data:
```

#### **4. Subir o Container do Banco de Dados**

Execute o comando para criar e iniciar o banco de dados:

```bash
docker compose up -d
```

#### **5. Verificar o Container**

Certifique-se de que o container está funcionando:

```bash
docker ps
```

Você verá o container `easyfinanceai-postgres` em execução.

#### **6. Configurar o Arquivo `.env`**

Atualize o arquivo `.env` com a URL do banco de dados:

```plaintext
DATABASE_URL="postgresql://admin:admin@localhost:5432/easyfinanceai"
```

#### **7. Migrar o Banco de Dados**

Rode o seguinte comando para criar as tabelas no banco de dados:

```bash
npx prisma migrate dev
```

#### **8. Visualizar o Banco de Dados**

Para abrir uma interface visual do banco de dados, execute:

```bash
npx prisma studio
```

#### **Comandos Úteis**

- **Parar o container**:
  ```bash
  docker compose down
  ```
- **Reiniciar o container**:
  ```bash
  docker compose up -d
  ```

---

### **Passo 5: Configurar o Prisma**

Rode os seguintes comandos para configurar o banco de dados e gerar o cliente Prisma:

```bash
# Sincronizar o esquema do banco de dados com o Prisma (criar as tabelas)
npx prisma migrate dev

# Gerar o cliente Prisma (gerar código de acesso ao banco de dados)
npx prisma generate

# (Opcional) Popular o banco de dados com dados iniciais
npx prisma db seed

# (Opcional) Verificar o estado das migrações aplicadas
npx prisma migrate status

# (Opcional) Acessar o Prisma Studio (interface gráfica do banco de dados)
npx prisma studio
```

---

### **Passo 6: Rodar o Servidor de Desenvolvimento**

Inicie o servidor local para acessar a aplicação:

```bash
npm run dev
```

Abra o navegador e acesse o projeto em [http://localhost:3000](http://localhost:3000).

---

### **Passo 7: Configuração de Webhooks**

Para integrar os webhooks do **Stripe**, você pode usar o **Stripe CLI** ou configurar diretamente na sua aplicação. Abaixo está um guia básico para configurar os webhooks.

1. **Configuração Básica com Stripe CLI (Local)**:

   - Baixe e instale o [Stripe CLI](https://docs.stripe.com/stripe-cli).
   - Faça login no Stripe CLI:
     ```bash
     stripe login
     ```
   - Para testar os webhooks localmente, use o comando abaixo:
     ```bash
     stripe listen --forward-to localhost:3000/api/webhooks/stripe
     ```
     Isso redirecionará os eventos de webhook para sua aplicação local.

2. **Configuração de Webhooks (Remota)**:
   Para usar webhooks no ambiente de produção ou remoto, basta configurar a URL do webhook no painel do Stripe e no backend da sua aplicação para receber os eventos.

Para mais informações detalhadas sobre como configurar webhooks no Stripe, consulte a [documentação oficial do Stripe CLI](https://stripe.com/docs/stripe-cli) e [webhooks do Stripe](https://stripe.com/docs/webhooks).

## **Arquitetura do Projeto Easy FinanceAi**

A estrutura do projeto segue uma organização modular e lógica, garantindo escalabilidade e facilidade de manutenção. Abaixo está uma explicação detalhada das principais pastas e arquivos do projeto.

### **1. Estrutura Geral do Projeto**

```plaintext
.
├── app/                # Diretório principal contendo rotas e componentes do Next.js
├── prisma/             # Configurações e esquema do banco de dados
├── public/             # Arquivos estáticos como imagens e ícones
├── components.json     # Configurações relacionadas a componentes
├── docker-compose.yml  # Configuração do ambiente Docker
├── middleware.ts       # Middleware para interceptação de requisições
├── next.config.mjs     # Configuração do Next.js
├── package.json        # Dependências e scripts do projeto
├── prisma/             # ORM Prisma para definição de esquema e migrações
├── tailwind.config.ts  # Configuração do Tailwind CSS
├── tsconfig.json       # Configuração do TypeScript
└── README.md           # Documentação do projeto
```

### **2. Detalhes do Diretório `app/`**

O diretório `app` segue a estrutura de rotas do Next.js 13 e organiza os arquivos por funcionalidades.

```plaintext
app/
├── _actions/           # Funções assíncronas que gerenciam operações no servidor
├── api/                # Endpoints da API
├── _components/        # Componentes reutilizáveis e específicos de UI
├── _constants/         # Constantes utilizadas no projeto
├── _data/              # Funções e lógicas relacionadas à manipulação de dados
├── (home)/             # Página inicial e seus subcomponentes
├── login/              # Página de login
├── subscription/       # Página de assinatura e gerenciamento de planos
├── transactions/       # Página de transações
├── _utils/             # Utilitários e funções auxiliares
└── layout.tsx          # Layout principal do projeto
```

### **3. `app/api/`**
Contém as rotas de API implementadas com Next.js.

Exemplo:
```plaintext
api/
└── webhooks/
    └── stripe/
        └── route.ts      # Webhook do Stripe para gerenciar eventos
```

### **4. `app/_components/`**
Armazena os componentes reutilizáveis para diferentes partes do projeto.

Exemplo:
```plaintext
_components/
├── add-transaction-button.tsx    # Botão para adicionar transações
├── money-input.tsx               # Componente para entrada de valores monetários
├── ui/                           # Componentes de interface reutilizáveis
│   ├── alert-dialog.tsx
│   ├── button.tsx
│   └── tooltip.tsx
└── upsert-transaction-dialog.tsx # Modal para criar/editar transações
```
