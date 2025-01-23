import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "../styles/globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const lato = Lato({ subsets: ["latin"], weight: ["100", "300", "400"] });

export const metadata: Metadata = {
  title: "Montra",
  description: "Montra",
};

export const revalidate = 0;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
