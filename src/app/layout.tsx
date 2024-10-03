import type { Metadata } from "next";

import { SpeedInsights } from "@vercel/speed-insights/next";

import "../@shared/styles/globals.css";
import { pretendard } from "../@shared/fonts";

export const metadata: Metadata = {
  title: "seungrodotlee",
  description: "Welcome to seungro's zone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.className} antialiased`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
