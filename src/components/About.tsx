import Image from "next/image";
import { GraduationCap, MapPin, Palette, Wrench } from "lucide-react";
import { Reveal } from "./Motion";

const highlights = [
  { label: "Tecnologias e Design", icon: GraduationCap },
  { label: "Lisboa, Grande Lisboa", icon: MapPin },
  { label: "Web Design e identidade visual", icon: Palette },
  { label: "Suporte técnico e configuração", icon: Wrench }
];

export function About() {
  return (
    <section id="sobre" className="py-20 sm:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <div className="relative mx-auto max-w-md">
            <div className="soft-border rounded-lg bg-white/[0.08] p-4 shadow-glow">
              <Image
                src="/assets/victorino-antonio.png"
                alt="Victorino António, desenvolvedor da WaltBoy Business"
                width={1200}
                height={1200}
                className="rounded-lg object-cover"
                loading="eager"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-electric">
            Sobre
          </span>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Sobre o Desenvolvedor
          </h2>
          <p className="mt-5 text-xl leading-8 text-cyan-100">
            Tecnologia, design e criatividade ao serviço de pessoas e pequenos
            negócios.
          </p>
          <div className="mt-7 space-y-5 text-base leading-8 text-slate-300">
            <p>
              Victorino António é o desenvolvedor por trás da WaltBoy Business.
              Natural de Luanda, Angola, e residente em Lisboa há pelo menos 5
              anos, construiu o seu percurso unindo tecnologia, design,
              criatividade e suporte informático.
            </p>
            <p>
              É formado em Tecnologias e Design, com base em Engenharia
              Informática, e possui conhecimentos e experiência de anos em
              Design Gráfico, Web Design, suporte técnico, diagnóstico,
              reparação, configuração e instalação de equipamentos informáticos.
            </p>
            <p>
              Além da tecnologia, Victorino é apaixonado por desenhos, arte,
              leitura, música e escrita, especialmente poesias. Essa ligação
              entre técnica e criatividade permite-lhe criar soluções funcionais,
              visuais, humanas e bem pensadas.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item.label} className="soft-border rounded-lg bg-white/[0.07] p-4">
                <item.icon className="mb-3 h-5 w-5 text-electric" />
                <span className="text-sm text-white">{item.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
