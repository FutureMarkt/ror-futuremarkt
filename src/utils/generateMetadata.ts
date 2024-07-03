import type { Metadata } from "next";

export function getMetadata(locale: string): Metadata {
  switch (locale) {
    case 'en':
      return {
        title: "FUTURE MARKT - RoR",
        description:
          "FUTURE MARKT: A platform for innovative solutions and cutting-edge technologies developed with Ruby on Rails. Learn more about the latest products and services that make your life more convenient and technologically advanced.",
        keywords:
          "innovation, technology, Ruby on Rails, gadgets, web development, IT solutions, education",
        robots: "index, follow",
      };
    case 'ru':
      return {
        title: "FUTURE MARKT - RoR",
        description:
          "FUTURE MARKT: Платформа для инновационных решений и передовых технологий, разработанных с использованием Ruby on Rails. Узнайте больше о новейших продуктах и услугах, которые делают вашу жизнь удобнее и технологичнее.",
        keywords:
          "инновации, технологии, Ruby on Rails, гаджеты, веб-разработка, IT-решения, обучение",
        robots: "index, follow",
      };
    case 'he':
      return {
        title: "FUTURE MARKT - RoR",
        description:
          "FUTURE MARKT: פלטפורמה לפתרונות חדשניים וטכנולוגיות מתקדמות שפותחו באמצעות Ruby on Rails. למדו עוד על המוצרים והשירותים החדשים ביותר שהופכים את חייכם לנוחים ומתקדמים יותר מבחינה טכנולוגית.",
        keywords:
          "חדשנות, טכנולוגיה, Ruby on Rails, גאדג'טים, פיתוח אתרים, פתרונות IT, חינוך",
        robots: "index, follow",
      };
    // Добавьте другие локали по мере необходимости
    default:
      return {
        title: "FUTURE MARKT - RoR",
        description:
          "FUTURE MARKT: Платформа для инновационных решений и передовых технологий, разработанных с использованием Ruby on Rails. Узнайте больше о новейших продуктах и услугах, которые делают вашу жизнь удобнее и технологичнее.",
        keywords:
          "инновации, технологии, Ruby on Rails, гаджеты, веб-разработка, IT-решения, обучение",
        robots: "index, follow",
      };
  }
}

export default getMetadata;
