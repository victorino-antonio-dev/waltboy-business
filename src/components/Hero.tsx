import Image from "next/image";
import { CheckCircle2, MessageCircle, Sparkles } from "lucide-react";
import { ButtonLink } from "./ButtonLink";
import { Reveal } from "./Motion";
import { contact, trustStats } from "@/data/site";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pb-16 pt-32 sm:pb-24 lg:pt-40">
      <div className="absolute inset-0 -z-10 bg-tech-grid bg-[size:44px_44px] opacity-40" />
      <div className="absolute inset-x-0 top-0 -z-10 h-2 bg-gradient-to-r from-electric via-violet to-electric" />
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <div>
            <div className="soft-border mb-6 inline-flex items-center gap-2 rounded-lg bg-white/[0.08] px-3 py-2 text-sm text-cyan-100">
              <Sparkles className="h-4 w-4 text-electric" />
              Tecnologia, design e suporte para pequenos negócios.
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              Assistência técnica, websites e design para pequenos negócios.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              A WaltBoy Business ajuda pessoas e pequenos negócios a resolver
              problemas informáticos, configurar equipamentos, criar presença
              digital e desenvolver uma imagem profissional para a sua marca.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={contact.whatsappHref}>
                Pedir orçamento pelo WhatsApp
              </ButtonLink>
              <ButtonLink href="#servicos" variant="secondary">
                Ver serviços
              </ButtonLink>
            </div>
            <div className="mt-9 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {trustStats.map((stat) => (
                <div key={stat.label} className="soft-border rounded-lg bg-white/[0.06] p-3">
                  <stat.icon className="mb-3 h-5 w-5 text-electric" />
                  <strong className="block text-lg text-white">{stat.value}</strong>
                  <span className="text-xs text-slate-400">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative">
            <div className="glass rounded-lg p-4">
              <div className="rounded-lg bg-gradient-to-br from-white via-slate-200 to-cyan-100 p-8">
                <Image
                  src="/assets/waltboy-business-logo.png"
                  alt="Logotipo WaltBoy Business"
                  width={1200}
                  height={400}
                  className="h-auto w-full"
                  priority
                />
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {["Suporte remoto", "Websites", "Identidade visual"].map((item) => (
                  <div key={item} className="rounded-lg bg-white/[0.08] p-4">
                    <CheckCircle2 className="mb-3 h-5 w-5 text-electric" />
                    <span className="text-sm text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <a
              href={contact.whatsappHref}
              className="soft-border absolute -bottom-5 left-5 inline-flex items-center gap-3 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-ink shadow-card"
            >
              <MessageCircle className="h-5 w-5 text-emerald-500" />
              Falar com o Victorino
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
