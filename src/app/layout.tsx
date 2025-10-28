import "./globals.css";
import { Palanquin } from "next/font/google";

const palanquin = Palanquin({
   weight: '400',
   subsets: ['latin'],
   display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={palanquin.className}>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
