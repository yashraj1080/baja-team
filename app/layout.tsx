import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Team Predators Racing",
  description: "Official BAJA SAE Team Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}