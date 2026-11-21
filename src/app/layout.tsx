import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Linkup – One identity. Seven layers. Infinite circles.",
  description:
    "Unified social graph combining skill-swap, hyper-local communities, creator feedback, accountability squads, anonymous industry whispers, event communities, and mentorship.",
  keywords: ["social", "community", "skill swap", "mentorship", "local", "networking"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
