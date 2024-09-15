import Script from "next/script";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import type { Viewport } from "next";

import "./globals.css";
import Header from "@/components/layout/header";
import { Providers } from "@/lib/providers";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

const title = "Karim Taha | Backend Engineer From Cairo, Egypt.";
const description =
  "A self-proclaimed designer who specializes in full stack development (React.js & Node.js), from Ahmedabad, India.";
const url = "https://www.linkedin.com/in/karimtismail/";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: [
    "Full Stack Developer",
    "Backend Engineer",
    "Java Developer",
    "Spring boot Developer",
  ],
  creator: "Karim Taha",
  // themeColor: [
  //   { media: "(prefers-color-scheme: light)", color: "white" },
  //   { media: "(prefers-color-scheme: dark)", color: "black" },
  // ],
  // openGraph: {
  // type: "website",
  // url,
  // title,
  // description,
  // siteName: title,
  // images: [
  //   {
  //     url: "/images/open-graph-sagar.png",
  //   },
  // ],
  // },
  // twitter: {
  // card: "summary_large_image",
  // title,
  // description,
  // creator: "@shahsagarm",
  // images: "/images/open-graph-sagar.png",
  // },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

const googleAnalyticsId = process.env.GOOGLE_ANALYTICS_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      {googleAnalyticsId ? (
        <head>
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          ></Script>
          <Script id="google-anayltics-script">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${googleAnalyticsId}');
          `}
          </Script>
        </head>
      ) : null}
      <body className={`${inter.className} bg-gray text-gray-600 antialiased`}>
        <Providers>
          <Header />
          <main className="flex min-h-screen w-full flex-col">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
