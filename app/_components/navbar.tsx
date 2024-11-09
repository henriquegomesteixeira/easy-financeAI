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
            "group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none group-hover:font-bold group-hover:text-primary">
            {title}
          </div>
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
                <ListItem href="/" title="Dashboard" />
                <ListItem href="/transactions" title="Transações" />
                <ListItem href="/transactions" title="Assinatura" />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center gap-10">
        <Image src="/logo.svg" alt="Finance AI" width={173} height={39} />

        {/* Menu para Desktop */}
        <div className="hidden gap-10 lg:flex">
          <Link
            href="/"
            className={
              pathname == "/"
                ? "font-bold text-primary"
                : "text-muted-foreground"
            }
          >
            Dashboard
          </Link>
          <Link
            href="/transactions"
            className={
              pathname == "/transactions"
                ? "font-bold text-primary"
                : "text-muted-foreground"
            }
          >
            Transações
          </Link>
          <Link
            href="/subscription"
            className={
              pathname == "/subscription"
                ? "font-bold text-primary"
                : "text-muted-foreground"
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
