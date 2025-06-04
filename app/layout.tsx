
import type { Metadata } from "next";
import "./globals.css";

import ClientWrapper from "@/components/ClientWrapper";

export const metadata: Metadata = {
  title: "The Big Bank Theory",
  description: "What matters in African banking",
  icons: "/images/logo.png"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white relative" data-theme="cyberpunk">
          <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
