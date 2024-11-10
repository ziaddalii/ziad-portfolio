import "./globals.css";
import { Six_Caps } from "next/font/google";
import { Playfair_Display, Marcellus } from "next/font/google";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import BG from "@/assets/images/bg.jpg";
import BodyBackground from "@/components/BodyBackground";

const sixCaps = Six_Caps({
  display: "swap",
  variable: "--font-six-caps-mono",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  display: "swap",
  variable: "--font-inter-sans",
  weight: "500",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  display: "swap",
  variable: "--font-playfair-display",
  weight: "600",
  subsets: ["latin"],
});
const asset = Marcellus({
  display: "swap",
  variable: "--font-asset",
  weight: "400",
  subsets: ["latin"],
});
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      style={{
        height: "100%",
        scrollBehavior: "smooth",
        width: "100%",
        background: `url(${BG.src}) no-repeat fixed center`,
        backgroundSize: "cover",
      }}
    >
      <body
        className={`${sixCaps.variable} ${playfairDisplay.variable} ${asset.variable} ${inter.variable} antialiased font-sans text-primary`}
      >
        <Navbar />
        <BodyBackground>
          <main className="relative after:top-0 after:absolute overflow-hidden">
            {children}
          </main>
        </BodyBackground>
      </body>
    </html>
  );
}
