import { MessageCircle } from "lucide-react";
import { contact } from "@/data/site";

export function WhatsAppButton() {
  return (
    <a
      href={contact.whatsappHref}
      className="focus-ring fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-emerald-500 text-white shadow-glow transition hover:scale-105"
      aria-label="Enviar mensagem no WhatsApp"
      title="Enviar mensagem no WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
