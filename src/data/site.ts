import {
  BadgeCheck,
  Brush,
  Code2,
  Cpu,
  Headphones,
  Home,
  Mail,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  Router,
  Sparkles,
  Wrench
} from "lucide-react";

export const contact = {
  email: "contacto@waltboybusiness.com",
  phone: "931 719 199",
  whatsappHref:
    "https://wa.me/351931719199?text=Ol%C3%A1%20Victorino%2C%20gostaria%20de%20pedir%20um%20or%C3%A7amento%20para%20a%20WaltBoy%20Business.",
  instagram: "https://www.instagram.com/waltboy.business",
  instagramLabel: "@waltboy.business",
  area: "Grande Lisboa e arredores"
};

export const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contacto", href: "#contacto" }
];

export const services = [
  {
    title: "Assistência Técnica Informática",
    icon: Wrench,
    description:
      "Resolvemos problemas técnicos em computadores, telemóveis, impressoras, internet e emails, com atendimento ao domicílio e suporte remoto.",
    items: [
      "Diagnóstico de problemas",
      "Formatação de computadores",
      "Instalação de programas",
      "Limpeza e otimização",
      "Backup de dados",
      "Configuração de impressoras",
      "Configuração de emails",
      "Routers e internet",
      "Suporte remoto",
      "Assistência ao domicílio"
    ]
  },
  {
    title: "Websites Profissionais",
    icon: Code2,
    description:
      "Criamos websites modernos, simples e profissionais para pequenos negócios que querem ganhar visibilidade, confiança e clientes.",
    items: [
      "Websites simples",
      "Landing pages",
      "Páginas de apresentação",
      "Portfólios profissionais",
      "Sites responsivos",
      "Botão WhatsApp",
      "Formulários de contacto",
      "Integração com redes sociais"
    ]
  },
  {
    title: "Design Gráfico e Identidade Visual",
    icon: Brush,
    description:
      "Criamos a imagem visual do teu negócio, desde o logotipo até aos materiais para redes sociais, com design profissional.",
    items: [
      "Logotipos",
      "Identidade visual",
      "Flyers digitais",
      "Posts para redes sociais",
      "Cartões de visita",
      "Banners",
      "Artes promocionais",
      "Materiais para campanhas"
    ]
  },
  {
    title: "Suporte Digital para Pequenos Negócios",
    icon: Headphones,
    description:
      "Ajudamos pequenos negócios a parecerem mais profissionais, organizados e preparados para vender melhor no digital.",
    items: [
      "Consultoria digital básica",
      "Presença online",
      "Email profissional",
      "Melhorias para redes sociais",
      "Ferramentas digitais",
      "Materiais comerciais"
    ]
  }
];

export const steps = [
  {
    title: "Contacto",
    description: "O cliente entra em contacto por WhatsApp, email ou Instagram.",
    icon: MessageCircle
  },
  {
    title: "Diagnóstico",
    description: "É feita uma avaliação do problema ou necessidade.",
    icon: MonitorSmartphone
  },
  {
    title: "Orçamento",
    description: "O cliente recebe uma proposta simples e clara.",
    icon: BadgeCheck
  },
  {
    title: "Execução",
    description: "O serviço é realizado ao domicílio, remotamente ou online.",
    icon: Sparkles
  }
];

export const portfolioCategories = [
  "Todos",
  "Websites",
  "Ecommerce",
  "Logotipos",
  "Flyers",
  "Redes Sociais",
  "Identidade Visual"
];

// Edit these URLs when each portfolio project has its final public link.
export const projectLinks = {
  damibrilho: "#",
  damibrilhoWebsite: "https://damibrilho.pages.dev/#hero",
  damibrilhoSocial: "https://www.tiktok.com/@damibrilho.limpezas",
  embaixadaDeCortes: "#",
  nay84: "https://nay84-digital-club.vercel.app/",
  nexora: "#",
  luxoPerucas: "http://localhost:3002/",
  waltboyBusiness: "#inicio"
};

export const portfolio = [
  {
    title: "DamiBrilho",
    category: "Identidade Visual",
    type: "Design gráfico, identidade visual e materiais comerciais",
    description:
      "Cartão de visita, presença visual e peças de comunicação para uma marca de limpeza profissional.",
    image: "/assets/portfolio-damibrilho-card.png",
    href: projectLinks.damibrilho
  },
  {
    title: "DamiBrilho Website",
    category: "Websites",
    type: "Website e campanha de divulgação",
    description:
      "Peça promocional para comunicar o lançamento do website e reforçar a presença digital da marca.",
    image: "/assets/portfolio-damibrilho-website.png",
    href: projectLinks.damibrilhoWebsite
  },
  {
    title: "DamiBrilho Social",
    category: "Redes Sociais",
    type: "Post para Instagram e Facebook",
    description:
      "Conteúdo visual para redes sociais com foco em serviços de limpeza hospitalar e confiança profissional.",
    image: "/assets/portfolio-damibrilho-post-instagram.jpg",
    href: projectLinks.damibrilhoSocial
  },
  {
    title: "Embaixada de Cortes",
    category: "Websites",
    type: "Website e sistema de agendamento para barbearia",
    description:
      "Projeto pensado para facilitar marcações, apresentar serviços e dar uma imagem mais premium à barbearia.",
    image: "/assets/embaixada-de-cortes-website.png",
    href: projectLinks.embaixadaDeCortes
  },
  {
    title: "NAY84 Club",
    category: "Websites",
    type: "Website, sistema de pedidos e reservas",
    description:
      "Projeto para restaurante com menu digital, gestão de pedidos, reservas e campanha visual de lançamento.",
    image: "/assets/portfolio-nay84-website-pedidos.png",
    href: projectLinks.nay84
  },
  {
    title: "NEXORA",
    category: "Websites",
    type: "Website institucional para marca de moda",
    description:
      "Landing page premium para marca de roupa com coleções, personalização, narrativa de marca e contacto.",
    image: "/assets/portfolio-nexora-website.png",
    href: projectLinks.nexora
  },
  {
    title: "Luxo Perucas",
    category: "Ecommerce",
    type: "Loja online de perucas e acessórios",
    description:
      "Ecommerce elegante para Portugal e Angola, com catálogo, WhatsApp, navegação por categorias e destaque premium.",
    image: "/assets/portfolio-luxo-perucas-ecommerce.png",
    href: projectLinks.luxoPerucas
  },
  {
    title: "WaltBoy Business",
    category: "Logotipos",
    type: "Identidade visual, website institucional e posts",
    description:
      "Sistema visual próprio com logotipo, linguagem tecnológica e estrutura digital para captação de clientes.",
    image: "/assets/wb-icon.png",
    href: projectLinks.waltboyBusiness
  }
];

export const prices = [
  ["Diagnóstico informático", "Desde 15€"],
  ["Formatação de computador", "Desde 35€"],
  ["Instalação de programas", "Desde 15€"],
  ["Configuração de impressora, router ou email", "Desde 20€"],
  ["Website simples", "Desde 150€"],
  ["Landing page profissional", "Desde 120€"],
  ["Logotipo simples", "Desde 50€"],
  ["Flyer digital", "Desde 15€"],
  ["Pack redes sociais", "Desde 40€"]
];

export const trustStats = [
  { value: "4", label: "áreas de serviço", icon: Cpu },
  { value: "24h", label: "resposta rápida", icon: MessageCircle },
  { value: "Lisboa", label: "atendimento local", icon: MapPin },
  { value: "Online", label: "suporte remoto", icon: Router }
];

export const footerLinks = [
  { label: contact.email, href: `mailto:${contact.email}`, icon: Mail },
  { label: contact.phone, href: contact.whatsappHref, icon: MessageCircle },
  { label: contact.area, href: "#contacto", icon: Home }
];
