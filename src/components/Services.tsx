import { services } from "@/data/site";
import { Reveal } from "./Motion";

export function Services() {
  return (
    <section id="servicos" className="bg-slate-50 py-20 text-ink sm:py-28">
      <div className="section-shell">
        <Reveal>
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-violet">
              Serviços
            </span>
            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Do problema técnico à presença digital profissional.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Soluções simples, diretas e pensadas para pessoas, famílias e
              pequenos negócios que precisam de suporte confiável e imagem
              profissional.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.05}>
              <article className="h-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-card">
                <service.icon className="h-9 w-9 text-violet" />
                <h3 className="mt-5 text-2xl font-semibold">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-slate-100 px-3 py-2 text-sm text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
