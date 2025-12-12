import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import QuantumBackground from "@/components/quantum-background";
import "./globals.css";

export const metadata: Metadata = {
  title: "Satya Sarthak Manohari | Cybersecurity · Research · Developer",
  description:
    "B.Tech CSE student specializing in Cybersecurity. Research intern at NISER working on Physics-Informed Neural Networks.",
  keywords: [
    "cybersecurity",
    "physics-informed neural networks",
    "developer",
    "research",
  ],
  openGraph: {
    title: "Satya Sarthak Manohari | Cybersecurity · Research · Developer",
    description:
      "B.Tech CSE student specializing in Cybersecurity. Research intern at NISER.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0620",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fira+Code:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 antialiased transition-colors duration-300">
        <ThemeProvider>
          <QuantumBackground />
          <Navigation />
          <main className="relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
