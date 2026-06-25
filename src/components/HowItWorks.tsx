import { steps } from "@/data/site";
import { Reveal } from "./Motion";

export function HowItWorks() {
  return (
    <section className="py-20 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-electric">
                Como funciona
              </span>
              <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                Sem complicações.
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-300">
              Explicas o que precisas, analisamos a melhor solução e avançamos
              com rapidez e profissionalismo.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.06}>
              <article className="glass h-full rounded-lg p-5">
                <span className="font-mono text-sm text-cyan-200">
                  0{index + 1}
                </span>
                <step.icon className="mt-8 h-8 w-8 text-electric" />
                <h3 className="mt-5 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
