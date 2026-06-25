import Image from "next/image";
import { footerLinks, navItems } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30 py-10">
      <div className="section-shell flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/assets/wb-icon.png"
            alt=""
            width={48}
            height={48}
            className="rounded-lg"
          />
          <div>
            <strong className="block text-white">WaltBoy Business</strong>
            <span className="text-sm text-slate-400">
              Assistência Técnica | Websites | Design Gráfico
            </span>
          </div>
        </div>
        <nav className="flex flex-wrap gap-4 text-sm text-slate-300">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-wrap gap-3">
          {footerLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="soft-border inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.07] text-slate-200 hover:text-white"
              aria-label={item.label}
              title={item.label}
            >
              <item.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
      <div className="section-shell mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:justify-between">
        <span>© 2026 WaltBoy Business. Todos os direitos reservados.</span>
        <a href="#contacto" className="hover:text-white">
          Política de privacidade simples
        </a>
      </div>
    </footer>
  );
}
