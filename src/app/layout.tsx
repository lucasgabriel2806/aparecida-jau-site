import "./globals.css";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import { Metadata } from "next";

// Metadado global
export const metadata: Metadata = {
  title: 'Aparecida Jaú',
  description: 'aparecidajau.com - Site oficial da Paróquia Nossa Senhora Aparecida da cidade de Jaú / SP, que traz notícias sobre nossa comunidade, formação religiosa, liturgia diária, vela virtual, vídeos e mais conteúdos da Rede Aparecida de Comunicação.', // Atualizar descrição
  icons: {
    icon: '/favicon.png', // Caminho para o seu arquivo em public/
  },
  openGraph: {
    title: 'Aparecida Jaú - Site oficial',
    description: 'aparecidajau.com - Site oficial da Paróquia Nossa Senhora Aparecida da cidade de Jaú / SP, que traz notícias sobre nossa comunidade, formação religiosa, liturgia diária, vela virtual, vídeos e mais conteúdos da Rede Aparecida de Comunicação.',
    images: [''], // Adicionar imagem
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-BR">
      <body
        className={`antialiased`}
      >

        <Header />

        {children}

        <Footer />

      </body>
    </html>
  );
}
