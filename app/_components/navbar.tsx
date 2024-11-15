"use client";

import { Menu } from "lucide-react";

import * as React from "react";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { cn } from "../_lib/utils";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className={cn("text-sm font-medium leading-none")}>{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between border-b border-solid px-2 py-4 lg:px-8">
      <NavigationMenu className="lg:hidden">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <Menu size={24} />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <ListItem
                  href="/"
                  title="Dashboard"
                  className={
                    pathname == "/"
                      ? "border bg-accent font-bold text-primary"
                      : "outline outline-0 outline-primary hover:outline-1"
                  }
                />
                <ListItem
                  href="/transactions"
                  title="Transações"
                  className={
                    pathname == "/transactions"
                      ? "border bg-accent font-bold text-primary"
                      : "outline outline-0 outline-primary hover:outline-1"
                  }
                />
                <ListItem
                  href="/subscription"
                  title="Assinatura"
                  className={
                    pathname == "/subscription"
                      ? "border bg-accent font-bold text-primary"
                      : "outline outline-0 outline-primary hover:outline-1"
                  }
                />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center gap-10">
        <Image src="/logo.svg" alt="Easy FinanceAI" width={173} height={39} />

        {/* Menu para Desktop */}
        <div className="hidden gap-10 lg:flex">
          <Link
            href="/"
            className={
              pathname == "/"
                ? "py-1 font-bold text-primary"
                : "rounded-sm px-3 py-1 text-muted-foreground hover:bg-accent hover:text-white"
            }
          >
            Dashboard
          </Link>
          <Link
            href="/transactions"
            className={
              pathname == "/transactions"
                ? "py-1 font-bold text-primary"
                : "rounded-sm px-3 py-1 text-muted-foreground hover:bg-accent hover:text-white"
            }
          >
            Transações
          </Link>
          <Link
            href="/subscription"
            className={
              pathname == "/subscription"
                ? "py-1 font-bold text-primary"
                : "rounded-sm px-2 py-1 text-muted-foreground hover:bg-accent hover:text-white"
            }
          >
            Assinatura
          </Link>
        </div>
      </div>

      <div className="hidden lg:flex">
        <UserButton showName />
      </div>

      <div className="flex lg:hidden">
        <UserButton />
      </div>
    </nav>
  );
};

export default Navbar;
