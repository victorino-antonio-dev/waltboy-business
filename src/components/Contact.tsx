"use client";

import { FormEvent } from "react";
import { Instagram, Mail, MapPin, MessageCircle, UserRound } from "lucide-react";
import { contact } from "@/data/site";
import { ButtonLink } from "./ButtonLink";

export function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = [
      "Olá Victorino, gostaria de pedir um orçamento.",
      "",
      `Nome: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      `Telefone: ${formData.get("phone")}`,
      `Serviço: ${formData.get("service")}`,
      `Mensagem: ${formData.get("message")}`
    ].join("\n");

    window.open(`https://wa.me/351931719199?text=${encodeURIComponent(message)}`, "_blank");
  }

  return (
    <section id="contacto" className="py-20 sm:py-28">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-electric">
            Contacto
          </span>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
            A tua tecnologia resolvida. A tua marca mais profissional.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Fala com a WaltBoy Business para assistência técnica, websites,
            design gráfico ou suporte digital para pequenos negócios.
          </p>

          <div className="mt-8 grid gap-3">
            <ContactRow icon={Mail} label="Email" value={contact.email} href={`mailto:${contact.email}`} />
            <ContactRow icon={MessageCircle} label="WhatsApp" value={contact.phone} href={contact.whatsappHref} />
            <ContactRow icon={Instagram} label="Instagram" value={contact.instagramLabel} href={contact.instagram} />
            <ContactRow icon={MapPin} label="Área" value={contact.area} href="#contacto" />
            <ContactRow icon={UserRound} label="Desenvolvedor" value="Victorino António" href="#sobre" />
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={contact.whatsappHref}>Enviar mensagem no WhatsApp</ButtonLink>
            <ButtonLink href={`mailto:${contact.email}`} variant="secondary">
              Enviar email
            </ButtonLink>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glass rounded-lg p-5 sm:p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Nome" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Telefone" name="phone" required />
            <label className="grid gap-2 text-sm font-medium text-slate-200">
              Serviço pretendido
              <select
                name="service"
                className="focus-ring min-h-12 rounded-lg border border-white/10 bg-ink px-4 text-white"
                defaultValue="Assistência técnica"
              >
                <option>Assistência técnica</option>
                <option>Website profissional</option>
                <option>Design gráfico</option>
                <option>Identidade visual</option>
                <option>Suporte digital</option>
              </select>
            </label>
          </div>
          <label className="mt-4 grid gap-2 text-sm font-medium text-slate-200">
            Mensagem
            <textarea
              name="message"
              rows={6}
              required
              className="focus-ring rounded-lg border border-white/10 bg-ink px-4 py-3 text-white"
              placeholder="Explica rapidamente o que precisas."
            />
          </label>
          <button
            type="submit"
            className="focus-ring mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-gradient-to-r from-electric to-violet px-5 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.01]"
          >
            Pedir orçamento
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-200">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="focus-ring min-h-12 rounded-lg border border-white/10 bg-ink px-4 text-white"
      />
    </label>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a href={href} className="soft-border flex items-center gap-4 rounded-lg bg-white/[0.07] p-4">
      <Icon className="h-5 w-5 text-electric" />
      <span className="grid gap-1">
        <span className="text-xs uppercase tracking-[0.16em] text-slate-500">{label}</span>
        <span className="text-sm font-semibold text-white">{value}</span>
      </span>
    </a>
  );
}
