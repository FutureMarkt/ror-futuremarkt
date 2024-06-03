"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'use-intl';

import { affectBold700, affectLight300, ppNeueMont500 } from '@/utils/fonts';

const Footer = () => {
  const footerIntl = useTranslations("Index.Footer");

  return (
    <footer
      className="flex-col justify-center items-center w-full relative bg-[#DFDFDF] pb-[30px] px-[15px]"
      dir="ltr"
    >
      <div
        className={`max-w-[340px] md:max-w-[708px] lg:max-w-[964px] 2xl:max-w-[1300px] mx-auto text-[#030303] uppercase ${affectLight300.className}`}
      >
        <div className="flex flex-col justify-center items-center">
          <h1
            className={`text-[50.35px] md:text-[108.01px] lg:text-[128px] 2xl:text-[197px] leading-[35.24px] md:leading-[75.61px] lg:leading-[138.6px] tracking-[-4px] md:tracking-[-3px] ${affectBold700.className}`}
          >
            FUTURE MARKT
          </h1>
          <p className="uppercase leading-[19.67px] md:leading-[42.19px] lg:leading-[50px] text-[15.73px] md:text-[33.75px] lg:text-[40px] mt-[10px] md:mt-6 tracking-[5px]">
            {footerIntl.raw("digitalAgency")}
          </p>
        </div>

        <div className="flex gap-5 md:gap-0 flex-row-reverse md:flex-row justify-between mt-[30px] md:mt-[60px]">
          <div className="text-xs md:text-lg leading-[14px] md:leading-5 max-w-[180px] md:max-w-none">
            <p className="">{footerIntl.raw("copyright")}</p>
            <p className="mt-[10px] md:mt-3">
              {footerIntl.raw("legalEntityInfo")}
            </p>
            <p className="leading-3 text-[12px] md:text-xs mt-[10px] md:mt-3 text-[#7F7F7F]">
              {footerIntl.raw("privacy")}
            </p>
          </div>

          <div className="md:w-[205px] lg:w-[303px] 2xl:max-w-[185px] text-xs md:text-lg 2xl:text-right">
            <p className="leading-[14px]">
              {footerIntl.raw("forAllQuestions")}
            </p>
            <p className="mt-3 leading-[14px] md:leading-5">
              {footerIntl.raw("@yarkoch")}
              <br />
              @yarkoch
            </p>
          </div>
        </div>

        <div
          className={`mt-[30px] border-t border-[#030303] 2xl:flex justify-between pt-[20px] normal-case text-xs leading-[17.5px] relative hidden ${ppNeueMont500.className}`}
        >
          <p className={``}>
            © Future Markt 2012–2024 {footerIntl.raw("rights")}
          </p>
          <Link href="#" className="flex items-center">
            <Image
              src="/arrow-up-dark.png"
              width={12}
              height={12}
              alt="arrow up"
            />
            {footerIntl.raw("upBtn")}
          </Link>
        </div>

        <div className="mt-[30px] grid gap-[18px] md:grid-cols-3">
          {Object.entries(footerIntl.raw("addresses")).map(
            ([phone, addr], index) => (
              <div
                key={index}
                className={`normal-case flex flex-col justify-between 2xl:items-center text-xs leading-[17.5px] md:h-[95px] lg:h-[70px] md:max-w-[205px] lg:max-w-[303px] xl:max-w-[345px] lg:text-left 2xl:text-center ${
                  index === 0 ? "md:justify-self-start" : ""
                } ${index === 1 ? "md:justify-self-center" : ""} ${
                  index === 2 ? "md:justify-self-end" : ""
                } ${ppNeueMont500.className}`}
              >
                <p>{addr as string}</p>
                <a href={`tel:${phone}`} className="mt-[7px] md:mt-0">
                  {phone}
                </a>
              </div>
            )
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
