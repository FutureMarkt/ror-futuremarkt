"use client";

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';

import { affect700, affectBold700, ppNeueMontLight500 } from '@/utils/fonts';

import Section from '../Section';

interface Case {
  [key: string]: any;
}

interface Cases {
  [filter: string]: Case;
}

const OurCases = () => {
  const ourCasesIntl = useTranslations("Index.OurCases");

  const [hoveredCase, setHoveredCase] = useState<number | null>(null);

  const id = "our-cases";
  const header = ourCasesIntl.raw("title");

  const customHeader: JSX.Element = (
    <div className={`text-center`}>
      <h1 className={`uppercase text-2xl ${affectBold700.className}`}>
        {header}
      </h1>
      <p
        className={`mt-6 lg:text-sm 2xl:text-lg lg:leading-[18.4px] 2xl:leading-[23px] ${ppNeueMontLight500.className}`}
      >
        {ourCasesIntl.raw("description")}
      </p>
    </div>
  );

  return (
    <Section id={id} header={header} customHeader={customHeader}>
      {/* CASES LIST */}
      <div className="mt-[60px] flex gap-5 justify-between">
        {Object.entries(ourCasesIntl.raw("cases") as Cases).map(
          ([title, { description, img }], index) => (
            <div
              key={index}
              className={`xl:max-w-[411px] 2xl:max-w-[420px] transition-all ${
                hoveredCase === index ? "brightness-100" : "brightness-75"
              }`}
              onMouseEnter={() => setHoveredCase(index)}
              onMouseLeave={() => setHoveredCase(null)}
            >
              <div className="xl:max-w-[411px] 2xl:max-w-[420px] lg:h-[370px] relative">
                <Image
                  src={`/_our-cases/${img}`}
                  alt={img.split(".")[0]}
                  fill
                  className="bg-[#1D1D1D] rounded-[5px] max-w-[420px] max-h-[370px]"
                />
              </div>

              {/* CASE TITLE */}
              <h4
                className={`mt-3 flex items-end text-xl uppercase leading-6 tracking-[1px] cursor-pointer ${affect700.className}`}
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
                className={`mt-3 text-xs leading-[16.1px] ${ppNeueMontLight500.className}`}
              >
                {description}
              </p>
            </div>
          )
        )}
      </div>

      {/* ORDER A PROJECT */}
      <div className="flex justify-center">
        <a
          href="#"
          className=" flex items-center mt-[60px] leading-5 text-[#FFDE9F] uppercase"
        >
          [{ourCasesIntl.raw("orderLink")}
          <Image
            src="/arrow-side-yellow.png"
            width={16}
            height={16}
            alt="arrow"
            className="mx-1"
          />
          ]
        </a>
      </div>
    </Section>
  );
};

export default OurCases;
