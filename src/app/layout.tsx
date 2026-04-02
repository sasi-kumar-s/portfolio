import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sasi Kumar | Frontend Developer & UI/UX Builder",
  description: "Product-minded frontend developer building polished interfaces, smart web tools, and modern digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-white/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
