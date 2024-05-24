import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';

import { affectBold700, affectLight300, ppNeueMont500 } from '@/utils/fonts';

import Section from '../Section';

const WeInMedia = () => {
  const weInMediaIntl = useTranslations("Index.WeInMedia");
  const questionsIntl = useTranslations("Index.HaveQuestions");

  const id = "we-in-media";
  const header = weInMediaIntl.raw("title");

  const locale = useLocale();

  return (
    <Section id={id} header={header} theme="light">
      {/* OUR MEDIA  */}
      <div className="flex flex-col md:flex-row gap-[30px] mt-[30px] md:mt-0">
        {/* ARTICLES */}
        {Object.entries(weInMediaIntl.raw("articles")).map(
          ([title, { img, description }], index) => (
            <div
              key={index}
              className="flex flex-col md:max-w-[334px] lg:max-w-[466px] 2xl:max-w-[635px]"
            >
              <div className="md:w-[334px] lg:w-[466px] 2xl:w-[635px] h-[344px] md:h-[334px] lg:h-[400px] relative">
                <Image
                  src={`/_we-in-media/${locale}/${img}-desktop.png`}
                  fill
                  placeholder="empty"
                  alt={img.split(".")[0]}
                  className="hidden md:block"
                />
                <Image
                  src={`/_we-in-media/${locale}/${img}-mobile.png`}
                  fill
                  placeholder="empty"
                  alt={img.split(".")[0]}
                  className="block md:hidden"
                />
              </div>
              <div className="mt-3 h-[156px] flex flex-col justify-between">
                <h4
                  className={`uppercase text-xl leading-[24px] ${affectBold700.className}`}
                >
                  {title}
                </h4>
                <div className="flex flex-col justify-between">
                  <p
                    className={`text-xs text-[#4C4C4C] leading-[16.1px] mt-1 ${ppNeueMont500.className}`}
                  >
                    {description}
                  </p>
                  <a
                    className={`text-xs leading-[16.1px] mt-6 ${ppNeueMont500.className}`}
                  >
                    [{weInMediaIntl.raw("readMore")}]
                  </a>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      {/* VIDEO */}
      <div className="mt-[30px] md:mt-[60px]">
        <div className="w-330px md:w-[708px] lg:w-[964px] 2xl:w-[1300px] h-[186px] md:h-[398px] lg:h-[542px] 2xl:h-[731px] bg-[#030303] rounded-[5px]"></div>
      </div>

      {/* SOOCIAL MEDIA */}
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-4 mt-[30px] md:mt-[60px] max-w-[264px] md:max-w-none">
          {socialMedia.map((icon) => (
            <a
              key={icon}
              href="#"
              className="flex justify-center items-center w-[40px] md:w-[60px] h-[40px] md:h-[60px] border border-[#030303] rounded-[5px] px-[5px] py-[10px]"
            >
              <img
                src={`/_we-in-media/${icon}`}
                alt={`${icon.split(".")[0]}`}
              />
            </a>
          ))}
        </div>
      </div>

      {/* HAVE A QUESTION */}
      <div className="mt-[60px] md:mt-[100px] lg:mt-[120px] flex flex-col items-center">
        <div className="max-w-[803px] text-center">
          <h1
            className={`uppercase tracking-[2px] leading-[40px] md:leading-[64px] text-[40px] md:text-2xl text-center ${affectBold700.className}`}
          >
            {questionsIntl.raw("title")}
          </h1>
          <p
            className={`mt-4 md:mt-5 text-sm md:text-lg xl:text-xl lg:leading-6 2xl:text-[32px] 2xl:leading-[32px] uppercase ${affectLight300.className}`}
          >
            {questionsIntl.raw("leaveReq")}
          </p>
        </div>

        <div className="mt-[26px] md:mt-9 lg:mt-[60px] flex flex-col md:flex-row gap-5 md:gap-[48px] items-center">
          <button
            className={`py-[16.5px] px-[12.5px] md:px-[30px] max-w-[218px] md:max-w-[328px] lg:max-h-[54px] 2xl:max-w-[342px] 2xl:max-h-[66px] flex items-center bg-[#FFDE9F] border border-[#030303] rounded-[5px] uppercase text-xs md:text-lg ${ppNeueMont500.className}`}
          >
            {questionsIntl.raw("writeTGBtn")}{" "}
            <Image
              src="/arrow-side-dark.png"
              width={16}
              height={16}
              alt="arrow"
              className="ml-4 w-[11.33px] md:w-[16px] h-[11.33px] md:h-[16px]"
            />
          </button>

          <a href="" className="flex items-center uppercase text-xs md:text-lg">
            [{questionsIntl.raw("leaveReqLink")}{" "}
            <Image
              src="/arrow-side-dark.png"
              width={16}
              height={16}
              alt="arrow"
              className="mx-1 w-[11.33px] md:w-[16px] h-[11.33px] md:h-[16px]"
            />
            ]
          </a>
        </div>
      </div>
    </Section>
  );
};

const socialMedia = [
  "behance.png",
  "youtube.png",
  "tg.png",
  "vk.png",
  "inst.png",
  "vc.png",
  "habr.png",
];

export default WeInMedia;
