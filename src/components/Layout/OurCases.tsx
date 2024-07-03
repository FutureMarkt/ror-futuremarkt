"use client";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { ReactNode, useEffect, useState } from 'react';
import { useClickOutside } from 'react-click-outside-hook';
import { useInView } from 'react-intersection-observer';

import { affectBold700, ppNeueMontLight500 } from '@/utils/fonts';

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
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [outsideRef, hasClickedOutside] = useClickOutside();

  const id = "our-cases";
  const header = ourCasesIntl.raw("title");

  useEffect(() => {
    if (!hasClickedOutside) {
      setModalContent(null);
      setHoveredCase(null);
    }
  }, [hasClickedOutside]);

  const customHeader: JSX.Element = (
    <div className={`text-center`}>
      <h1
        className={`uppercase leading-[40px] md:leading-[64px] text-[40px] md:text-2xl ${affectBold700.className}`}
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
    <div>
      <div
        className={`fixed w-[100vw] h-full left-0 top-0 z-[-1] transition-all ${
          modalContent ? "z-[0]" : "z-20 opacity-0"
        }`}
      >
        <div className="bg-black opacity-70 fixed w-full left-0 top-0 h-full z-10"></div>

        <div className="fixed z-20 w-full h-full flex justify-center items-center">
          <div
            className="w-4 h-4 absolute right-10 top-10 cursor-pointer"
            onClick={() => {
              setModalContent(null);
              document.body.style.overflow = "auto";
            }}
          >
            <Image src={"/close.png"} width={16} height={16} alt="close" />
          </div>
          <div className="w-[340px] sm:w-[600px] md:w-[700px] h-[500px] md:h-[600px] bg-[#1D1D1D] rounded-[5px] p-6 overflow-auto">
            {modalContent}
          </div>
        </div>
      </div>

      <Section
        id={id}
        header={header}
        customHeader={customHeader}
        customSectionStyles={`relative ${modalContent ? "z-[-1]" : "z-0"}`}
      >
        {/* CASES LIST */}
        <div className="mt-[60px] flex gap-5 justify-between">
          {/* SLIDER FOR MOBILE DEVICES */}
          <div className="block w-[330px] 2xl:w-[1300px] md:w-[708px] lg:w-[964px]">
            <CasesSlider
              modalContent={modalContent}
              setModalContent={setModalContent}
            />
          </div>
        </div>

        {/* ORDER A PROJECT */}
        <div className="flex justify-center">
          <a
            href="https://t.me/vitkoz"
            target="_blank"
            className=" flex items-center mt-[56px] md:mt-[62px] lg:mt-[60px] text-lg leading-5 text-[#FFDE9F] transition-all hover:brightness-75 uppercase"
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
    </div>
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
