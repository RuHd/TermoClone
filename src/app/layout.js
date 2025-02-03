import { Mitr } from "next/font/google";
import "./globals.css";

const mitr = Mitr({
  variable: "--font-mitr",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Termo Clone",
  description: "Created By Ruan Mesquita",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mitr.variable}`}>
        {children}
      </body>
    </html>
  );
}
