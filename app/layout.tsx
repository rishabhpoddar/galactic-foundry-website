import type { Metadata } from "next";
import "./globals.css";
import { Questrial } from 'next/font/google'
import Navbar from "./navbar";
import Footer from "./footer"

const inter = Questrial({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  description: "EVE online corporation"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " margin-width"} style={{
        color: "#0e1f58",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}>
        <div style={{
          position: "sticky",
          top: 0
        }}>
          <div className="full-width" style={{
            paddingLeft: "5vw",
            paddingTop: "2%",
            paddingBottom: "2%",
            fontSize: "22px",
            backgroundColor: "white"
          }}>Galactic Foundry Consortium</div>
          <Navbar />
        </div >
        {children}
        < Footer />
      </body >
    </html >
  );
}
