import Image from "next/image";
import React from "react";
import { Button } from "../_components/ui/button";
import { LogIn } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  // Recebe o id do usuário logado
  const { userId } = await auth();
  // Verifica se o usuário já está logado
  if (userId) {
    redirect("/");
  }

  return (
    <div className="grid h-full items-center lg:grid-cols-2">
      <div className="mx-auto flex h-full max-w-[550px] flex-col justify-center p-8">
        <Image
          src="/logo.svg"
          alt="Finance AI"
          width={173}
          height={39}
          className="mb-8"
        />
        <h1 className="font mb-3 text-4xl font-bold">Bem-vindo</h1>
        <p className="mb-8 text-muted-foreground">
          A Finance AI é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>
        <SignInButton>
          <Button variant="outline">
            <LogIn className="mr-2" />
            Fazer login ou criar conta
          </Button>
        </SignInButton>
      </div>
      <div className="mx-[10%] hidden grid-rows-[70vh_15%] gap-y-10 lg:grid xl:mx-[15%] 2xl:mx-[25%]">
        <div className="relative">
          <Image
            src="/login.png"
            alt="Faça login"
            fill
            priority
            sizes="100vw"
            className="rounded-2xl object-cover object-left-top"
          />
        </div>
        <div className="flex flex-col justify-center rounded-xl">
          <Image src="/logo.svg" alt="Finance AI" width={173} height={39} />
          <p>
            Gerencie suas finanças pessoais de uma forma simples com a
            finance.ai, e o melhor, totalmente de graça!
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
