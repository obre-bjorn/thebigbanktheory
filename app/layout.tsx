import type { Metadata } from "next";
// import  {Montserrat, Merriweather}  from "next/font/google"
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";



// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "The Big Bank Theory",
  description: "What matters in african banking",
  icons: "/images/logo.png "
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body data-theme="cyberpunk" className="bg-white" >
        {children}
      </body>
    </html>
  );
}
