import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Yago — Dev Backend",
    template: "%s | Yago",
  },
  description:
    "Portfólio e blog de desenvolvimento — Java, Spring Boot, Python e automações.",
  openGraph: {
    title: "Yago — Dev Backend",
    description: "Portfólio e blog de desenvolvimento.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
