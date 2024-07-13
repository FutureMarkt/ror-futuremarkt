// components/YandexMetrika.js
"use client";

import Script from 'next/script';

export default function YandexMetrika() {
  return (
    <>
      <Script
        id="yandex-metrika"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            
          `,
        }}
      />
    </>
  );
}
