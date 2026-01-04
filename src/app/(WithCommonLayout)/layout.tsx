import { Outfit } from "next/font/google";
import { ReactNode } from "react";

export const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>
        {children}</body>
    </html>
  );
} 