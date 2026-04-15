import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tractic — Gestión de Portafolio Inmobiliario",
  description:
    "Plataforma integral para la gestión y administración de portafolios inmobiliarios en Honduras. Optimiza tus inversiones, propiedades y rentabilidad con herramientas avanzadas de análisis y seguimiento.",
  keywords: [
    "gestión inmobiliaria",
    "portafolio",
    "Honduras",
    "propiedades",
    "inversiones",
    "real estate",
  ],
  authors: [{ name: "Tractic" }],
  openGraph: {
    title: "Tractic — Gestión de Portafolio Inmobiliario",
    description:
      "Plataforma integral para la gestión y administración de portafolios inmobiliarios en Honduras.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
