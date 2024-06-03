import type { Metadata, Viewport } from "next";
import '../globals.css';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { getLangDir } from 'rtl-detect';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FUTURE MARKT - RoR",
  description:
    "FUTURE MARKT: Платформа для инновационных решений и передовых технологий, разработанных с использованием Ruby on Rails. Узнайте больше о новейших продуктах и услугах, которые делают вашу жизнь удобнее и технологичнее.",
  keywords:
    "инновации, технологии, Ruby on Rails, гаджеты, веб-разработка, IT-решения, обучение",
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  const direction = getLangDir(locale);

  return (
    <html lang={locale} dir={direction}>
      <body className={`${inter.className} overflow-x-hidden`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
