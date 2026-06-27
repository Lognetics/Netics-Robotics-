import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AIAssistant from "@/components/layout/AIAssistant";
import ScrollProgress from "@/components/layout/ScrollProgress";
import { CartProvider } from "@/components/cart/CartContext";
import CartDrawer from "@/components/cart/CartDrawer";
import { site } from "@/lib/site";

const display = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = Inter({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: `${site.name} — Building the Future of Intelligent Robotics`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "robotics", "AI robots", "humanoid robots", "industrial automation",
    "NETICS", "Africa robotics", "service robots", "robotics marketplace",
  ],
  openGraph: {
    title: `${site.name} — The Future of Robotics Begins Here`,
    description: site.description,
    type: "website",
    siteName: site.name,
  },
  twitter: { card: "summary_large_image", title: site.name, description: site.description },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground">
        <CartProvider>
          <ScrollProgress />
          <Navbar />
          <main className="flex flex-col">{children}</main>
          <Footer />
          <AIAssistant />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
