import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap"
});

export const metadata: Metadata = {
  title: "HR Lanches - Pizzas, salgados e doces em Bangu",
  description:
    "Landing page oficial da HR Lanches com cardapio, horarios, promocao e pedidos pelo WhatsApp.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico"
  },
  openGraph: {
    title: "HR Lanches",
    description:
      "Mais de 17 anos de tradicao em pizzas, salgados e doces no Rio de Janeiro.",
    type: "website",
    locale: "pt_BR"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${oswald.variable}`}>{children}</body>
    </html>
  );
}
