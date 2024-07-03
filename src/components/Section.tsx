"use client";

import React, { JSXElementConstructor, ReactElement, ReactNodeArray } from 'react';
import { useInView } from 'react-intersection-observer';

import { affectBold700, ppNeueMont500 } from '@/utils/fonts';

interface SectionProps {
  id: string;
  header:
    | string
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactNodeArray;
  adaptiveTitle?: React.ReactNode;
  lgTitle?: React.ReactNode;
  customHeader?: React.ReactNode;
  children: React.ReactNode;
  customSectionStyles?: string;
  customContainerStyles?: string;
  customHeaderStyles?: string;
  theme?: string;
  threshold?: number;
}

const Section = ({
  id,
  header,
  adaptiveTitle,
  lgTitle,
  customHeader = undefined,
  children,
  customSectionStyles,
  customContainerStyles,
  customHeaderStyles,
  theme = "dark",
  threshold = 0.02,
}: SectionProps) => {
  const { ref, inView } = useInView({
    // triggerOnce: true,
    threshold: [threshold, 0.8],
  });

  return (
    <section
      id={id}
      className={`flex justify-center items-center w-full h-fit py-[60px] md:py-[100px] 2xl:py-[120px] px-[15px] md:px-[30px] lg:px-7 overflow-x-hidden ${
        theme === "dark"
          ? "bg-[#030303] text-[#F7F7F7]"
          : "bg-[#DFDFDF] text-[#030303]"
      } ${customSectionStyles}`}
    >
      <div
        className={`max-w-[340px] md:max-w-[708px] lg:max-w-[964px] 2xl:max-w-[1300px] mx-auto transition-all duration-700 ${customContainerStyles} ${
          inView
            ? "translate-y-[0px] opacity-100"
            : "translate-y-[100px] opacity-0"
        }`}
        ref={ref}
      >
        {customHeader ? (
          customHeader
        ) : (
          <div
            className={`uppercase tracking-[4px] leading-[40px] md:leading-[64px] text-[40px] md:text-2xl text-center ${affectBold700.className}`}
          >
            {adaptiveTitle ? (
              <>
                <h1 className="hidden xl:block">{header}</h1>
                <h1 className="hidden md:block xl:hidden">{lgTitle}</h1>
                <h1 className="block md:hidden">{adaptiveTitle}</h1>
              </>
            ) : lgTitle ? (
              <>
                <h1 className="hidden md:block">{header}</h1>
                <h1
                  className={`hidden lg:block xl:hidden ${customHeaderStyles}`}
                >
                  {lgTitle}
                </h1>
              </>
            ) : (
              <h1>{header}</h1>
            )}
          </div>
        )}
        <div
          className={`md:mt-[60px] lg:mt-10 2xl:mt-[60px] text-lg ${ppNeueMont500.className}`}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
