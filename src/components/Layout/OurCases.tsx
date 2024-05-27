"use client";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';

import { affect700, affectBold700, ppNeueMontLight500 } from '@/utils/fonts';

import CasesSlider from '../CasesSlider';
import Section from '../Section';

interface Case {
  [key: string]: any;
}

interface Cases {
  [filter: string]: Case;
}

const OurCases = () => {
  const locale = useLocale();
  const ourCasesIntl = useTranslations("Index.OurCases");

  const [hoveredCase, setHoveredCase] = useState<number | null>(null);

  const id = "our-cases";
  const header = ourCasesIntl.raw("title");

  const customHeader: JSX.Element = (
    <div className={`text-center`}>
      <h1
        className={`uppercase text-[40px] md:text-2xl ${affectBold700.className}`}
      >
        {header}
      </h1>
      <p
        className={`mt-3 md:mt-6 lg:text-sm 2xl:text-lg md:leading-[18.4px] 2xl:leading-[23px] hidden md:block ${ppNeueMontLight500.className}`}
      >
        {ourCasesIntl.raw("description")}
      </p>
      <p
        className={`mt-3 md:mt-6 text-xs lg:text-sm 2xl:text-lg leading-[16.1px] md:leading-[18.4px] 2xl:leading-[23px] block md:hidden ${ppNeueMontLight500.className}`}
      >
        {ourCasesIntl.rich("responsiveDescription", {
          break: (chunks) => (
            <>
              {chunks}
              <br></br>
            </>
          ),
        })}
      </p>
    </div>
  );

  return (
    <Section
      id={id}
      header={header}
      customHeader={customHeader}
      customContainerStyles=""
    >
      {/* CASES LIST */}
      <div className="mt-[60px] flex gap-5 justify-between">
        {/* SLIDER FOR MOBILE DEVICES */}
        <div className="block 2xl:hidden w-[330px] md:w-[708px] lg:w-[964px]">
          <CasesSlider />
        </div>

        {/* DESKTOP VERSION OF CASES */}
        <div className="hidden 2xl:flex gap-5">
          {Object.entries(ourCasesIntl.raw("cases") as Cases).map(
            ([title, { description, img }], index) => (
              <div
                key={index}
                className={`max-w-[420px] transition-all ${
                  hoveredCase === index ? "brightness-100" : "brightness-75"
                }`}
                onMouseEnter={() => setHoveredCase(index)}
                onMouseLeave={() => setHoveredCase(null)}
              >
                <div className="w-[420px] h-[370px] relative">
                  <Image
                    src={`/_our-cases/${img}`}
                    alt={img.split(".")[0]}
                    fill
                    className="bg-[#1D1D1D] rounded-[5px] object-contain"
                  />
                </div>

                {/* CASE TITLE */}
                <h4
                  className={`mt-3 flex justify-between items-baseline text-xl uppercase leading-6 tracking-[1px] cursor-pointer ${affect700.className}`}
                >
                  <span className="2xl:mr-4">{title}</span>
                  <Image
                    src="/_our-cases/arrow-side-light.png"
                    width={16}
                    height={16}
                    alt="arrow"
                    className={`mb-[2px] ${
                      hoveredCase === index ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </h4>

                {/* CASE DESCRIPTION */}
                <p
                  className={`mt-3 max-w-[412px] 2xl:w-auto text-xs leading-[16.1px] text-[#F7F7F7] ${ppNeueMontLight500.className}`}
                >
                  {description}
                </p>
              </div>
            )
          )}
        </div>
      </div>

      {/* ORDER A PROJECT */}
      <div className="flex justify-center">
        <a
          href="https://t.me/yarkoch"
          className=" flex items-center mt-[56px] md:mt-[62px] lg:mt-[60px] text-lg leading-5 text-[#FFDE9F] uppercase"
        >
          [{ourCasesIntl.raw("orderLink")}
          {locale !== "he" && (
            <Image
              src="/arrow-side-yellow.png"
              width={16}
              height={16}
              alt="arrow"
              className="mr-1"
            />
          )}
          ]
          {locale === "he" && (
            <Image
              src="/arrow-side-yellow.png"
              width={16}
              height={16}
              alt="arrow"
              className="mx-1"
            />
          )}
        </a>
      </div>
    </Section>
  );
};

const getShownSlides = () => {
  if (window.innerWidth < 768) {
    return 0.9;
  }

  if (window.innerWidth <= 1024) {
    return 1.02;
  } else {
    return 2.2;
  }
};

export default OurCases;
