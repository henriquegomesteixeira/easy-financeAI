# ![Logo](/public/logo.svg)

**Easy FinanceAi** é uma aplicação web projetada para simplificar o gerenciamento financeiro pessoal. A plataforma combina um dashboard intuitivo com gráficos interativos e relatórios personalizados gerados por **inteligência artificial**, oferecendo aos usuários insights avançados sobre suas finanças. Com um sistema seguro de login via **Clerk**, os usuários podem gerenciar receitas, despesas e investimentos detalhadamente, além de escolher entre planos gratuito ou premium, adaptados às suas necessidades.

## **Índice**

1. [Introdução](#Introdução)
2. [Funcionalidades Principais](#Funcionalidades-Principais)
3. [Tecnologias Principais](#Tecnologias-Principais)
4. [Tecnologias de Suporte](#Tecnologias-de-Suporte)
5. [Configuração do Projeto Easy FinanceAi](#Configuração-do-Projeto-Easy-FinanceAi)
   1. [Pré-requisitos](#Pré-requisitos)
   2. [Clonar o Repositório](#Clonar-o-Repositório)
  1. [Instalar Dependências](#Instalar-Dependências)
   3. [Configurar Variáveis de Ambiente](#Configurar-Variáveis-de-Ambiente)
   4. [Configurar o Banco de Dados](#Configurar-o-Banco-de-Dados)
      1. [Usar Banco de Dados Remoto](#Usar-Banco-de-Dados-Remoto)
      2. [Usar Docker para Banco de Dados Local](#Usar-Docker-para-Banco-de-Dados-Local)
   5. [Configurar o Prisma](#Configurar-o-Prisma)
   6. [Rodar o Servidor de Desenvolvimento](#Rodar-o-Servidor-de-Desenvolvimento)
      1. [Configuração de Webhooks](#Configuração-de-Webhooks-Opicional)

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

---

### **5. Expansões Futuras**

Novidades em desenvolvimento para melhorar a experiência:

- **Planejamento Financeiro Mensal:** Defina metas de gastos fixos e controle seu orçamento mensal de forma proativa.

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

Pronto! O banco de dados está configurado e funcionando localmente com o Docker.

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

### **Passo 7: Configuração de Webhooks (Opcional)**

Caso esteja usando o **Stripe** em ambiente local, será necessário configurar o Stripe CLI para testar os webhooks. Siga as instruções abaixo:

1. Baixe e instale o [Stripe CLI](https://docs.stripe.com/stripe-cli) compatível com seu sistema operacional.

2. Após a instalação, faça login no Stripe CLI utilizando sua conta Stripe:

   ```bash
   stripe login
   ```

3. Será necessário criar um arquivo de configuração `.stripe` para armazenar as credenciais do Stripe CLI. Esse arquivo é essencial para rodar os webhooks localmente.

   - Faça o download do exemplo de arquivo `.stripe` diretamente no link:  
     [Baixar .stripe](https://stripe.com/docs/stripe-cli/configuration)

   - Coloque o arquivo `.stripe` na raiz do seu projeto ou na pasta padrão indicada pela documentação do Stripe CLI.

4. Teste os webhooks rodando o seguinte comando:
   ```bash
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   ```

Agora, o Stripe CLI redirecionará os eventos do webhook para sua aplicação local, permitindo que você teste o processamento de pagamentos de maneira integrada.

Se tiver dúvidas adicionais, consulte a [documentação oficial do Stripe CLI](https://stripe.com/docs/stripe-cli).
neira prática e visual:

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

---

### **5. Expansões Futuras**

Novidades em desenvolvimento para melhorar a experiência:

- **Planejamento Financeiro Mensal:** Defina metas de gastos fixos e controle seu orçamento mensal de forma proativa.

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

---

### **Pré-requisitos**

Certifique-se de ter os seguintes itens instalados na sua máquina:

- [Node.js](https://nodejs.org/) (v18+)
- [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/) (opcional se utilizar um serviço de hospedagem de banco de dados remoto)
- [Docker](https://www.docker.com/) (opcional para configurar o banco de dados localmente)

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

Pronto! O banco de dados está configurado e funcionando localmente com o Docker.

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
