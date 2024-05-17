import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ["en", "ru", "he"],

  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(en|ru|he)/:path*"],
};
