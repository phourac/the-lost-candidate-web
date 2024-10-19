import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/Sections/Navbar";
import Footer from "@/components/Sections/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import NextTopLoader from "nextjs-toploader";

// const inter = Inter({ subsets: ["latin"] });

const inter = localFont({
  src: [
    {
      path: "../../../public/fonts/Inter-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Inter-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "auto",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  openGraph: {
    title: "TK Express",
    description:
      "BLOC is Cambodian home delivery, you make a purchase, your items will arrive at your doors.",
  },
  icons: [
    {
      rel: "icon",
      type: "image/ico",
      url: "favicon.ico",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
  ],
  title: "TK Express",
  description:
    "BLOC is Cambodian home delivery, you make a purchase, your items will arrive at your doors.",
  keywords:
    "cambodia, delivery, grocery, food, baverage, drink, stationary, baby mart, flowers, health, bakery",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);

  const messages = await getMessages();
  return (
    <html lang={locale} className={`${inter.variable}`}>
      <NextIntlClientProvider messages={messages}>
        <body className="">
          <Navbar />
          <main className="flex  mx-auto min-h-screen bg-paper">
            <NextTopLoader
              showSpinner={false}
              color="#024F87"
              easing="ease"
              height={5}
              speed={1000}
            />

            {children}
          </main>
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
