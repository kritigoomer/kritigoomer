import type { Metadata } from "next";
import { Comforter_Brush, Playfair_Display} from "next/font/google";
import "./globals.css";

const comforterBrush = Comforter_Brush({
  variable: "--font-heading",
  weight: ['400'],
  subsets: ['latin'],
});

const playfair = Playfair_Display({
  variable: "--font-body",
  weight: ['400'],
  subsets: ['latin'],
})


export const metadata: Metadata = {
  title: "Kriti Goomer",
  description: "Made with love.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${comforterBrush.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className={`${playfair.variable} min-h-full flex flex-col`}>{children}</body>
    </html>
  );
}
