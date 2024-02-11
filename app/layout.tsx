import type { Metadata } from "next";
import "./globals.css";
import { Questrial } from 'next/font/google'
import Navbar from "./navbar";

const inter = Questrial({ weight: '400', subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Galactic Foundry",
  description: "EVE online corporation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " margin-width"} style={{
        color: "#0e1f58"
      }}>
        <div style={{
          paddingTop: "2%",
          paddingBottom: "2%",
          fontSize: "22px",
        }}>Galactic Foundry Consortium</div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
