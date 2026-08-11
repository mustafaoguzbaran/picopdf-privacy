import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://picopdf-privacy.mustafaoguzbaran.chatgpt.site"),
  title: "PicoPDF Privacy Policy | Gizlilik Politikası",
  description:
    "How PicoPDF handles files, advertising data, consent choices, and on-device PDF processing.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "PicoPDF Privacy Policy",
    description: "Your files stay on your device.",
    images: [{ url: "/og.png", width: 1731, height: 909 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PicoPDF Privacy Policy",
    description: "Your files stay on your device.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
