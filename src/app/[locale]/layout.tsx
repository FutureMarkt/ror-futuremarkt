import type { Metadata, Viewport } from "next";
import '../globals.css';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { getLangDir } from 'rtl-detect';

import getMetadata from '@/utils/generateMetadata';

const inter = Inter({ subsets: ["latin"] });

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
  const metadata = getMetadata(locale);

  return (
    <html lang={locale} dir={direction}>
      <head>
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
        <meta name="keywords" content={metadata.keywords as string} />
        <meta name="robots" content={metadata.robots as string} />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
