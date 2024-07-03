"use client";

import anime from 'animejs';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import {
    affect300, affect700, affectBold700, affectLight300, ppNeueMont500, ppNeueMontLight500
} from '@/utils/fonts';

import DropdownMenu from '../DropdownMenu';
import LocaleSwitcher from '../LocalSwitcher';

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const locale = useLocale();
  const headerIntl = useTranslations("Index.Header");

  const wordLines: HTMLDivElement[] = [];

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    animateTrickingLine(wordLines, locale);
  });

  return (
    <>
      <DropdownMenu isOpen={menuIsOpen} setIsOpen={setMenuIsOpen} />
      <div className="relative overflow-hidden">
        {/* DESKTOP RUBY IMAGES */}
        <Image
          src={"/ruby.png"}
          width={500}
          height={400}
          alt="big-ruby"
          className="absolute z-10 -left-[110px] lg:-left-[105px] top-[210px] lg:top-[328px] xl:top-[220px] md:w-[240px] lg:w-[360px] 2xl:w-[500px] md:h-[180px] lg:h-[260px] 2xl:h-[400px] hidden md:block"
        />
        <Image
          src={"/ruby.png"}
          width={170}
          height={150}
          alt="small-ruby"
          className="absolute z-10 right-[50px] lg:right-[80px] 2xl:right-[180px] top-[50vh] lg:top-[100px] xl:top-[180px] hidden md:block w-[100px] xl:w-[170px] h-[84px] xl:h-[150px]"
        />
        <Image
          src={"/ruby.png"}
          width={120}
          height={100}
          alt="extrasmall-ruby"
          className="absolute z-10 right-[80vw] lg:right-[180px] xl:right-[400px] bottom-[105px] lg:bottom-[200px] xl:bottom-[14vh] rotate-[20deg] w-[100px] lg:w-[120px] hidden md:block"
        />

        {/* TABLET RUBY IMAGES */}
        <div className="absolute z-10 right-2 top-[134px] brightness-75 block md:hidden">
          <div className="relative w-[35px] h-[34px]">
            <Image src={"/_header/extrasmall-ruby.png"} fill alt="ruby" />
          </div>
        </div>
        <div className="absolute z-10 -left-[3px] top-[320px] -rotate-[15deg] block md:hidden">
          <div className="relative w-[35px] h-[34px]">
            <Image src={"/ruby.png"} fill alt="ruby" />
          </div>
        </div>

        <section
          id="header"
          className="flex justify-center w-full h-[737px] md:h-[670px] lg:h-[711px] xl:h-[920px] 2xl:h-[100vh] relative bg-[#030303] px-[15px] overflow-x-hidden"
        >
          <div className="mx-auto xl:w-[1200px] 2xl:w-[1300px] text-[#F7F7F7]">
            {/* NAVIGATION */}
            <div className="justify-between items-center mt-[20px] px-[20px] py-[10px] border rounded-[5px] hidden xl:flex">
              {/* HEADER LOGO */}
              <div className="max-w-[255px]">
                <a
                  href={`https://futuremarkt.com/${locale}`}
                  target="_blank"
                  className={`text-[37.65px] leading-[48.72px] ${affect700.className}`}
                >
                  FUTURE MARKT
                </a>
                <p
                  className={`text-[16.73px] leading-[20.3px] tracking-[4px] uppercase ${affectLight300.className}`}
                >
                  {headerIntl.raw("digitalAgency")}
                </p>
              </div>

              {/* HEADER NAV LINKS */}
              <nav
                className={`flex justify-between xl:w-[550px] 2xl:w-[584px] text-lg ${ppNeueMont500.className}`}
              >
                {Object.entries(headerIntl.raw("navLinks")).map(
                  ([name, link]) => (
                    <a key={name} href={`${link}`} className="leading-[20px]">
                      [{name}]
                    </a>
                  )
                )}
              </nav>

              {/* CONTACT AND SET LANG LINKS */}
              <div className="flex" dir="ltr">
                <a
                  href="https://t.me/vitkoz"
                  target="_blank"
                  className={`text-[#FFDE9F] flex items-center cursor-pointer xl:ml-0 xl:mr-[38.67px] 2xl:mx-[38.67px] uppercase transition-all hover:brightness-75 ${ppNeueMont500.className}`}
                >
                  {locale === "he" && (
                    <Image
                      src={"/arrow-side-yellow.png"}
                      width={16}
                      height={16}
                      alt="arrow"
                      className="mr-[2px]"
                    />
                  )}
                  [{headerIntl.raw("messageUs")}
                  {locale !== "he" && (
                    <Image
                      src={"/arrow-side-yellow.png"}
                      width={16}
                      height={16}
                      alt="arrow"
                      className="ml-[2px]"
                    />
                  )}
                  ]
                </a>
                <LocaleSwitcher />
              </div>
            </div>

            {/* MOBILE HEADER */}
            <div className="h-6 lg:h-[66px] mt-[30px] lg:mt-0 w-full flex justify-between xl:hidden">
              {/* HEADER LOGO */}
              <div className="flex items-center gap-5">
                <div
                  onClick={() => {
                    setMenuIsOpen(true);
                    document.body.style["overflowY"] = "hidden";
                  }}
                >
                  <div className="w-[30px] h-[3px] bg-white"></div>
                  <div className="w-[30px] h-[3px] bg-white mt-1"></div>
                </div>
                <div className="hidden md:block">
                  <h1
                    className={`text-[16px] leading-[20.7px] ${affect700.className}`}
                  >
                    FUTURE MARKT
                  </h1>
                  <p
                    className={`text-[8px] leading-[9.7px] tracking-[2px] ${affect300.className}`}
                  >
                    DIGITAL AGENCY
                  </p>
                </div>
              </div>

              {/* LINK IN TG */}
              <a
                href="https://t.me/vitkoz"
                target="_blank"
                className={`text-[#FFDE9F] text-xs md:text-lg flex items-center cursor-pointer uppercase transition-all hover:brightness-75 ${ppNeueMont500.className}`}
              >
                [{headerIntl.raw("messageUs")}
                <Image
                  src={"/arrow-side-yellow.png"}
                  width={16}
                  height={16}
                  alt="arrow"
                  className="mx-[2px] w-[11.33px] md:w-[16px] h-[11.33px] md:h-[16px]"
                />
                ]
              </a>
            </div>

            {/* HEADER TITLE */}
            <div
              className={`flex flex-col items-center mt-[7.8vh] md:mt-[44px] lg:mt-[63px] 2xl:mt-[120px] text-[12px] md:text-sm lg:text-lg md:tracking-[1px] text-center transition-all duration-500 ${
                ppNeueMont500.className
              } ${
                inView
                  ? "translate-y-[0px] opacity-100"
                  : "translate-y-[100px] opacity-0"
              }`}
              ref={ref}
            >
              <p className={`md:leading-[17.6px] lg:leading-5`}>
                {headerIntl.raw("projectImplement")}
              </p>
              <div
                className={`uppercase text-[37px] md:text-[63px] 2xl:text-3xl text-center leading-[37px] md:leading-[63px] 2xl:leading-[85px] md:max-w-[706px] lg:max-w-[1300px] mt-3 ${affectBold700.className}`}
              >
                <h1 className="hidden lg:block">
                  {headerIntl.rich("title", {
                    break: (chunks) => (
                      <>
                        {chunks}
                        <br></br>
                      </>
                    ),
                  })}
                </h1>

                <h1 className="block md:hidden mt-3">
                  {headerIntl.rich("adaptiveTitle", {
                    break: (chunks) => (
                      <>
                        {chunks}
                        <br></br>
                      </>
                    ),
                  })}
                </h1>

                <h1 className="hidden md:block lg:hidden">
                  {headerIntl.rich("mdTitle", {
                    break: (chunks) => (
                      <>
                        {chunks}
                        <br></br>
                      </>
                    ),
                  })}
                </h1>
              </div>

              {/* MOBILE RUBY IMAGE */}
              <div className="flex justify-center w-[145px] h-[120px] mt-6 relative md:hidden">
                <Image src={"/ruby.png"} fill alt="ruby" />
              </div>

              {/* GET FREE CONSULTATION */}
              <div
                className={`flex flex-col items-center mt-6 md:mt-[60px] ${ppNeueMontLight500.className}`}
              >
                {/* HEADER DESCRIPTION */}
                <p className="max-w-[330px] text-center leading-[14.3px] md:hidden">
                  {headerIntl.rich("description", {
                    break: (chunks) => (
                      <>
                        {chunks}
                        <br></br>
                      </>
                    ),
                  })}
                </p>

                {/* <p className="text-center leading-[14.3px] hidden md:block lg:hidden">
                  {headerIntl.rich("mdDescription", {
                    break: (chunks) => (
                      <>
                        {chunks}
                        <br></br>
                      </>
                    ),
                  })}
                </p> */}

                <p className="text-center text-sm xl:text-lg leading-[17.6px] xl:leading-[22px] hidden md:block">
                  {headerIntl.rich("desktopDescription", {
                    break: (chunks) => (
                      <>
                        {chunks}
                        <br></br>
                      </>
                    ),
                  })}
                </p>
                {/* ORDER CONSULTATION BUTTON */}
                <a
                  href={"https://t.me/vitkoz"}
                  target="_blank"
                  className={`md:px-[26px] py-[15px] bg-[#FFDE9F] rounded-[5px] mt-4 md:mt-[36px] lg:mt-[48px] w-[330px] md:w-auto xl:mt-[48px] flex justify-center text-xs md:text-lg z-10 transition-all hover:brightness-75 ${ppNeueMont500.className}`}
                  dir="ltr"
                >
                  <div className={`flex items-center uppercase text-[#030303]`}>
                    {headerIntl.raw("consultationBtn")}
                    <Image
                      src="/arrow-side-dark.png"
                      width={16}
                      height={16}
                      alt="arrow"
                      className="w-[11.33px] md:w-[16px] h-[11.33px] md:h-[16px] ml-[20px]"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* TICKING LINE */}
          <div
            className={`w-max flex gap-[24px] absolute text-[#FFDE9F] text-xl leading-[24px] uppercase left-0 bottom-[60px] md:bottom-[48px] lg:bottom-[65px] xl:bottom-[100px] ${
              locale === "he" ? ppNeueMontLight500 : affect700.className
            }`}
            dir="rtl"
          >
            {/* CYCLES FOR TICKING LINE OUTPUT */}
            {(locale === "en" ? [1, 2, 3, 4] : [1, 2, 3, 4]).map((item) => (
              <div
                key={item}
                ref={(node) => {
                  wordLines.push(node as HTMLDivElement);
                }}
                className="flex gap-6"
              >
                {getTrickerWords(locale).map((word, index) => (
                  <div key={index} className="">
                    {word}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

function getTrickerWords(locale: string) {
  if (locale === "he") return trickerWordsHE;
  if (locale === "ru") return trickerWordsRU;
  return trickerWordsEN;
}

const trickerWordsRU = [
  "Высоконагруженные порталы",
  "CRM системы",
  "ERP",
  "Техническая поддержка проекта/обновления версий",
];

const trickerWordsEN = [
  "High-load Portals",
  "CRM Systems",
  "ERP",
  "Technical Support for Projects/Version Updates",
];

const trickerWordsHE = [
  "פורטלים בעומס גבוה",
  "מערכות CRM",
  "ERP",
  "תמיכה טכנית לפרויקט/עדכוני גרסאות",
];

const animateTrickingLine = (wordLines: HTMLDivElement[], locale: string) => {
  if (wordLines.length > 0) {
    wordLines.forEach((wordLine) => {
      anime({
        targets: wordLine,
        translateX: [0, -(wordLine.offsetWidth || 0) - 24],
        duration: locale === "he" ? 12000 : 12000,
        easing: "linear",
        loop: true,
      });
    });
  }
};

export default Header;
