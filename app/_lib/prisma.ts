import { PrismaClient } from "@prisma/client";

// Garante que  o Prisma Client é instanciado uma única vez
declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: PrismaClient;
}

let prisma: PrismaClient;

// Verifica se estamos em ambiente de produção, se sim, cria uma nova instância do Prisma Client, caso contrário, verifica se já existe uma instância do Prisma Client e a reutiliza
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}

export const db = prisma;
