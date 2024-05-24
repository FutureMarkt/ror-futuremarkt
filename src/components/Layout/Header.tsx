"use client";

import anime from 'animejs';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect } from 'react';

import { affect300, affect700, affectBold700, ppNeueMont500 } from '@/utils/fonts';

const Header = () => {
  const headerIntl = useTranslations("Index.Header");

  const wordLines: HTMLDivElement[] = [];

  useEffect(() => {
    animateTrickingLine(wordLines);
  }, []);

  return (
    <div className="relative">
      <div className="absolute z-10 right-2 top-[134px] brightness-75">
        <div className="relative w-[35px] h-[34px]">
          <Image src={"/_header/extrasmall-ruby.png"} fill alt="ruby" />
        </div>
      </div>

      <div className="absolute z-10 -left-[3px] top-[320px] -rotate-[15deg]">
        <div className="relative w-[35px] h-[34px]">
          <Image src={"/ruby.png"} fill alt="ruby" />
        </div>
      </div>

      <section
        id="header"
        className="flex justify-center w-full h-[800px] md:h-[100vh] relative bg-[#030303] px-[15px] overflow-x-hidden"
      >
        <div className="mx-auto xl:w-[1200px] 2xl:w-[1300px] text-[#F7F7F7]">
          {/* NAVIGATION */}
          <div className="justify-between items-center mt-[20px] px-[20px] py-[10px] border rounded-[5px] hidden xl:flex">
            {/* HEADER LOGO */}
            <div className="max-w-[255px]">
              <h1
                className={`text-[37.65px] leading-[48.72px] ${affect700.className}`}
              >
                FUTURE MARKT
              </h1>
              <p
                className={`text-[16.73px] leading-[20.3px] tracking-[4px] ${affect300.className}`}
              >
                DIGITAL AGENCY
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
            <div className="flex">
              <a
                href="#"
                className={`text-[#FFDE9F] flex items-center cursor-pointer xl:ml-0 xl:mr-[38.67px] 2xl:mx-[38.67px] uppercase ${ppNeueMont500.className}`}
              >
                [{headerIntl.raw("messageUs")}
                <Image
                  src={"/arrow-side-yellow.png"}
                  width={16}
                  height={16}
                  alt="arrow"
                  className="ml-[2px]"
                />
                ]
              </a>
              <p
                className={`text-lg flex gap-[6px] items-center ${affect700.className}`}
              >
                RU
                <Image
                  src={"/_header/arrow-down-primary.png"}
                  width={14}
                  height={9}
                  alt="arrow"
                />
              </p>
            </div>
          </div>

          {/* MOBILE HEADER */}
          <div className="h-6 lg:h-[66px] mt-[30px] lg:mt-0 w-full flex justify-between xl:hidden">
            {/* HEADER LOGO */}
            <div className="flex items-center gap-5">
              <div>
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
              href="#"
              className={`text-[#FFDE9F] text-xs md:text-lg flex items-center cursor-pointe uppercase ${ppNeueMont500.className}`}
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
            className={`flex flex-col items-center mt-[7.8vh] md:mt-[60px] lg:mt-[63px] 2xl:mt-[120px] text-[12px] md:text-sm lg:text-lg md:tracking-[1px] text-center ${ppNeueMont500.className}`}
          >
            <p className={`md:leading-[17.6px] lg:leading-5`}>
              {headerIntl.raw("projectImplement")}
            </p>
            <div
              className={`uppercase text-[37px] md:text-[63px] 2xl:text-3xl text-center leading-[37px] md:leading-[63px] lg:leading-[63px] xl:leading-[85px] md:max-w-[706px] lg:max-w-[1300px] ${affectBold700.className}`}
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

              <h1 className="block lg:hidden mt-3">
                {headerIntl.rich("adaptiveTitle", {
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
            <div className="flex justify-center w-[168px] h-[149px] mt-6 relative md:hidden">
              <Image src={"/ruby.png"} fill alt="ruby" />
            </div>

            {/* GET FREE CONSULTATION */}
            <div className="flex flex-col items-center mt-6 md:mt-[60px]">
              <p className="md:max-w-[830px] text-xs md:text-sm text-center md:leading-[20px] hidden md:block">
                {headerIntl.rich("description", {
                  break: (chunks) => (
                    <>
                      {chunks}
                      <br></br>
                    </>
                  ),
                })}
              </p>

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
              <button className="px-[26px] py-[15px] bg-[#FFDE9F] rounded-[5px] mt-4 md:mt-[48px]">
                <div className={`flex items-center uppercase text-[#030303]`}>
                  {headerIntl.raw("consultationBtn")}
                  <Image
                    src="/arrow-side-dark.png"
                    width={16}
                    height={16}
                    alt="arrow"
                    className="w-[11.33px] md:w-[16px] h-[11.33px] md:h-[16px] ml-[6px]"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* TICKING LINE */}
        <div
          className={`w-max flex gap-[24px] absolute text-[#FFDE9F] text-xl leading-[24px] uppercase left-0 bottom-[100px] ${affect700.className}`}
        >
          {/* CYCLES FOR TICKING LINE OUTPUT */}
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              ref={(node) => {
                wordLines.push(node as HTMLDivElement);
              }}
              className="flex gap-6"
            >
              {trickerWords.map((word, index) => (
                <div key={index} className="">
                  {word}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const trickerWords = [
  "Высоконагруженные порталы",
  "CRM системы",
  "ERP",
  "Техническая поддержка проекта/обновления версий",
];

const animateTrickingLine = (wordLines: HTMLDivElement[]) => {
  if (wordLines.length > 0) {
    wordLines.forEach((wordLine) => {
      anime({
        targets: wordLine,
        translateX: [0, -(wordLine.offsetWidth || 0) - 24],
        duration: 12000,
        easing: "linear",
        loop: true,
      });
    });
  }
};

export default Header;
