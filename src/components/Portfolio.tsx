"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { portfolio, portfolioCategories } from "@/data/site";
import { cn } from "@/lib/utils";

export function Portfolio() {
  const [active, setActive] = useState("Todos");
  const visible = useMemo(
    () =>
      active === "Todos"
        ? portfolio
        : portfolio.filter((item) => item.category === active),
    [active]
  );

  return (
    <section id="portfolio" className="bg-white py-20 text-ink sm:py-28">
      <div className="section-shell">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-violet">
              Portfólio
            </span>
            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Trabalhos que juntam imagem, clareza e tecnologia.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Exemplos de websites, identidade visual, posts, flyers e materiais
              digitais criados para marcas em crescimento.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {portfolioCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className={cn(
                  "focus-ring rounded-lg border px-4 py-2 text-sm font-semibold transition",
                  active === category
                    ? "border-ink bg-ink text-white"
                    : "border-slate-200 bg-slate-50 text-slate-700 hover:border-violet hover:text-ink"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((item) => {
              const opensInNewTab =
                item.href.startsWith("http") || item.href.startsWith("file:");

              return (
                <motion.article
                  layout
                  key={item.title}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                  className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50 shadow-sm"
                >
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-ink">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                      loading="eager"
                    />
                  ) : (
                    <div className="h-full w-full bg-tech-grid bg-[size:34px_34px] p-6">
                      <div className="flex h-full flex-col justify-between rounded-lg border border-white/15 bg-white/[0.07] p-5">
                        <span className="text-sm text-cyan-200">{item.category}</span>
                        <strong className="max-w-xs text-3xl leading-tight text-white">
                          {item.title}
                        </strong>
                        <span className="h-1 w-20 rounded-full bg-gradient-to-r from-electric to-violet" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <span className="text-sm font-semibold text-violet">{item.type}</span>
                  <h3 className="mt-2 text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 min-h-20 leading-7 text-slate-600">
                    {item.description}
                  </p>
                  <a
                    href={item.href}
                    target={opensInNewTab ? "_blank" : undefined}
                    rel={opensInNewTab ? "noreferrer" : undefined}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-violet"
                  >
                    Ver projeto
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
