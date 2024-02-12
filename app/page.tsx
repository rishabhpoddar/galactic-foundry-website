import "./globals.css";
import "./home.css";
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
      <div className="full-width background-image-overlay" style={{
        backgroundImage: "url('/images/home_background_2.webp')",
        backgroundSize: "cover"
      }}>
        <div className="background-image-text-container">
          <div style={{
            backgroundColor: "white",
            color: "#0e1f58",
            display: "flex",
            flexDirection: "column",
            paddingTop: "30px",
            paddingLeft: "60px",
            paddingRight: "60px",
            paddingBottom: "20px",
            marginTop: "70px",
            marginBottom: "30px",
          }}>
            <span style={{
              fontSize: "30px",
              color: "rgb(37, 91, 254)"
            }}>
              We Are Galactic Foundry Consortium
            </span>
            <span className={inter.className} style={{
              fontSize: "18px",
            }}>
              Join in Game Today!<br /><br />

              Looking for Chill and Relaxed Members<br />
              Indy-Focused | Low 1.5% Tax<br />
              Hi-Sec to Jspace | Fleet Mining | Ore Buy-Back<br />
              Allied Nullsec | WH Ops | Exploration | Ship Replacment<br />
              Moon mining | PvE Fleets | PvP<br />
              Chill Enviroment for Veterans getting back into it or New Pilots starting their adventures!
              join for more;  GFCInc.<br />

              Forge Your Future Among the Stars with Galactic Foundry Consortium – Where Innovation Ignites, and New Pilots Soar<br />

              Welcome to Galactic Foundry Consortium Inc (GFCInc), where innovation meets industry in the vast expanse of space. As future pioneers of celestial craftsmanship, we specialize in the creation and production of stellar wonders. Our corporation is aspiring to be not only a powerhouse of industrial prowess but also a nurturing haven for new pilots. At GAFOC, we believe in fostering a community where seasoned veterans and fresh talents converge to shape the future of our galactic endeavors. With comprehensive training programs and mentorship, we ensure that even the newest pilots find a welcoming home among the stars, contributing to the collective success of our industrious family.
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
