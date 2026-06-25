import { prices } from "@/data/site";
import { Reveal } from "./Motion";
import { ButtonLink } from "./ButtonLink";
import { contact } from "@/data/site";

export function Pricing() {
  return (
    <section className="bg-slate-50 py-20 text-ink sm:py-28">
      <div className="section-shell">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-violet">
                Preços
              </span>
              <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                Valores simples para começar.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Os valores podem variar conforme a complexidade do serviço.
                Pede um orçamento personalizado para receber uma proposta clara.
              </p>
              <ButtonLink href={contact.whatsappHref} className="mt-8">
                Pedir orçamento personalizado
              </ButtonLink>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {prices.map(([service, price]) => (
                <div
                  key={service}
                  className="flex min-h-24 items-center justify-between gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <span className="text-sm font-medium text-slate-700">{service}</span>
                  <strong className="text-right text-lg text-ink">{price}</strong>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
