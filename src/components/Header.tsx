"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { contact, navItems } from "@/data/site";
import { ButtonLink } from "./ButtonLink";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/82 backdrop-blur-2xl">
      <div className="section-shell flex h-20 items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3" aria-label="WaltBoy Business">
          <Image
            src="/assets/wb-icon.png"
            alt=""
            width={44}
            height={44}
            className="rounded-lg"
            priority
          />
          <span className="text-sm font-semibold tracking-wide text-white">
            WaltBoy Business
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href={contact.whatsappHref}>Pedir orçamento</ButtonLink>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="focus-ring soft-border inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/[0.08] text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-ink px-5 py-5 lg:hidden">
          <nav className="mx-auto flex max-w-md flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-4 py-3 text-slate-200 hover:bg-white/[0.08]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <ButtonLink href={contact.whatsappHref} className="mt-2">
              Pedir orçamento
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
