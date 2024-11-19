import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Image from "next/image";
import { Toaster } from "sonner";

// Importa a fonte Mulish
const mulish = Mulish({
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Easy FinanceAI",
  description:
    "Easy FinanceAi é um SaaS de gestão financeira que utiliza inteligência artificial para auxiliar no gerenciamento de finanças pessoais e corporativas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${mulish.className} dark antialiased`}>
        <ClerkProvider
          appearance={{
            baseTheme: dark,
          }}
        >
          {/* Exibe o estado de carregamento enquanto o Clerk obtém os dados do usuário */}
          <ClerkLoading>
            <div className="flex h-screen animate-pulse items-center justify-center">
              <Image src="/logo.svg" alt="Logo" width={300} height={300} />
            </div>
          </ClerkLoading>

          {/* Exibe o conteúdo da aplicação após o carregamento dos dados */}
          <ClerkLoaded>
            <div className="flex h-full flex-col xl:overflow-hidden">
              {children}
            </div>
          </ClerkLoaded>
        </ClerkProvider>

        {/* Exibe notificações via toasts */}
        <Toaster />
      </body>
    </html>
  );
}
