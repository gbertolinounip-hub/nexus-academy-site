import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { siteUrl } from "@/lib/pages";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  // domínio canônico, com www: é a base das URLs absolutas de compartilhamento
  metadataBase: new URL(siteUrl),
  // Este canonical serve à home, que não tem metadata própria. Cada página
  // interna sobrescreve o seu — sem isso, todas herdariam "/" e se declarariam
  // cópias da home, tirando /sobre, /solucoes e /instalar do índice de busca.
  alternates: { canonical: "/" },
  title: "Nexus Academy",
  description: "Gestão acadêmica inteligente para cursos da área da saúde.",
  keywords: [
    "gestão acadêmica",
    "clínica supervisionada",
    "avaliação por competências",
    "Taxonomia de Bloom",
    "Pirâmide de Miller",
    "blueprint de avaliação",
    "software para curso de saúde",
    "inteligência de aprendizagem",
  ],
  openGraph: {
    title: "Nexus Academy",
    description: "Gestão acadêmica inteligente para cursos da área da saúde.",
    siteName: "Nexus Academy",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-nexus-academy.png",
        width: 1200,
        height: 630,
        alt: "Nexus Academy · Registrar é fácil. Entender muda a gestão.",
      },
    ],
  },
  // sem isso o X mostra um cartão pequeno, com a imagem em miniatura ao lado
  twitter: {
    card: "summary_large_image",
    title: "Nexus Academy",
    description: "Gestão acadêmica inteligente para cursos da área da saúde.",
    images: ["/og-nexus-academy.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // O site publica só o tema escuro. O azul continua no CSS e o alternador
    // continua em components/ui/ThemeToggle.tsx, ambos dormentes — sem o script
    // de inicialização aqui, uma escolha antiga gravada no navegador é ignorada.
    <html lang="pt-BR" className={`${sans.variable} ${display.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
