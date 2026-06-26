import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--app-font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--app-font-serif",
});

export const metadata: Metadata = {
  title: "SAVE A CHILD NGO",
  description: "Supporting children and communities across Nigeria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}