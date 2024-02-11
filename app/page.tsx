import "./globals.css";
import type { Metadata } from "next";
import { Work_Sans } from 'next/font/google'

const inter = Work_Sans({ weight: "200", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | Galactic Foundry",
};

export default function Home() {
  return (
    <main>
      <div className="full-width background-image-overlay">
        <div className="background-image-overlay-image-container">
          <img
            src="/images/home_background_1.webp"
            alt="Background image 1" />
        </div>
        <div className="background-image-text-container">
          <span className="background-image-text-1">
            Recruiting New and Experienced Pilots!
          </span>
          <span className={inter.className + " background-image-text-2"}>
            Apply In Game!
          </span>
        </div>
      </div>
    </main>
  );
}
