import "./globals.css";
import { Quicksand, Lexend_Deca, Comfortaa } from "next/font/google";
import Navbar from "../components/navbar";
import Providers from "./providers";

const brandFont = Comfortaa({
  subsets: ["latin"],
  variable: "--font-brand",
  weight: "400",
});
const headerFont = Quicksand({ subsets: ["latin"], variable: "--font-header" });
const bodyFont = Lexend_Deca({
  subsets: ["latin"],
  variable: "--font-body",
  weight: "300",
});

export const metadata = {
  title: "UNSW Personal Finance Society",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${brandFont.variable} ${headerFont.variable} ${bodyFont.variable} antialiased global-body`}
      >
        <Providers>
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
