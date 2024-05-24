import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { affectBold700, ppNeueMontLight500 } from '@/utils/fonts';

import Card from '../Card';
import Section from '../Section';

const AboutUs = () => {
  const aboutUsIntl = useTranslations("Index.AboutUs");
  const servicesIntl = useTranslations("Index.OtherServices");

  const id = "about-us";
  const header = aboutUsIntl.raw("title");

  return (
    <Section id={id} header={header}>
      <div className="flex justify-center">
        <p
          className={`text-center uppercase lg:max-w-[829px] 2xl:max-w-[1300px] md:text-[36px] lg:text-[30px] md:leading-[36px] lg:leading-[30px] 2xl:text-[36px] 2xl:leading-9 hidden md:block ${affectBold700.className}`}
        >
          {aboutUsIntl.raw("description")}
        </p>

        {/* RESPONSIVE VERSION OF DESCRIPTION */}
        <p
          className={`text-center uppercase text-xl leading-6 block mt-[30px] md:hidden ${affectBold700.className}`}
        >
          {aboutUsIntl.rich("responsiveDescription", {
            span: (chunks) => (
              <>
                <span className="text-[#4C4C4C]">{chunks}</span>
              </>
            ),
            break: (chunks) => (
              <>
                <br></br>
                {chunks}
              </>
            ),
          })}
        </p>
      </div>

      {/* OUR ACHIEVEMENTS */}
      <div className="flex flex-col lg:flex-row gap-6 md:gap-[30px] lg:gap-5 justify-center md:items-center lg:items-stretch mt-[30px] md:mt-[60px]">
        {Object.entries(aboutUsIntl.raw("advantages")).map(
          ([title, achieve], index) => (
            <Card
              key={index}
              title={title}
              content={achieve as string}
              classes="xl:text-[12px] px-[20px] lg:px-[18px] 2xl:px-[30px] py-[20px] md:max-w-[485px] lg:max-w-[301px] lg:leading-[13.8px]"
              headerStyles="text-[20px] leading-[20px]"
              contentStyles="text-[12px] leading-[13.8px]"
            />
          )
        )}
      </div>

      {/* CONNECT IN TELEGRAM */}
      <div className='flex flex-col lg:flex-row justify-between mt-[100px] md:mt-[60px] 2xl:mt-[100px] xl:pt-[50px] lg:h-[101px] 2xl:h-[230px] bg-[url("/ruby.png")] bg-no-repeat bg-contain'>
        <div className="max-w-[445px]">
          <h3
            className={`text-[36px] lg:text-[40px] 2xl:text-[48px] leading-[36px] lg:leading-[40px] 2xl:leading-[48px] tracking-[1px] text-center md:text-left ${affectBold700.className}`}
          >
            {aboutUsIntl.raw("haveIdea")}
          </h3>
          <p className="mt-3 lg:mt-[20px] text-sm lg:text-lg leading-4 md:leading-[20px]">
            {aboutUsIntl.rich("sayToUs", {
              break: (chunks) => (
                <>
                  {chunks}
                  <br></br>
                </>
              ),
            })}
          </p>
        </div>
        <div className="2xl:mr-[78px] mt-[80px] md:mt-12 lg:mt-0">
          <p className={`${ppNeueMontLight500.className}`}>
            {aboutUsIntl.raw("contactOnTG")}
          </p>

          {Object.entries(aboutUsIntl.raw("contacts")).map(
            ([worker, { post, link }]) => (
              <a
                key={worker}
                href={link}
                className="flex items-center text-[#FFDE9F] mt-[17px] lg:mt-[15px] xl:mt-[17px] relative uppercase"
              >
                [{worker},{post}{" "}
                <Image
                  src="/arrow-side-yellow.png"
                  width={16}
                  height={16}
                  alt="arrow"
                  className="mx-1"
                />
                ]
              </a>
            )
          )}
        </div>
      </div>

      {/* OUR OTHER SERVICES */}
      <div className="mt-[60px] md:mt-[100px] xl:mt-[120px]">
        <h1
          className={`uppercase tracking-[3px] leading-[40px] md:leading-[64px] text-[40px] md:text-2xl text-center ${affectBold700.className}`}
        >
          {servicesIntl.raw("title")}
        </h1>

        <div className="mt-[30px] md:mt-[60px] flex flex-col md:flex-row gap-6 md:gap-[21px] justify-center">
          {Object.entries(servicesIntl.raw("services")).map(
            ([title, desc], index) => (
              <Card
                title={title}
                content={desc as string}
                key={index}
                classes="px-[17px] py-[20px] lg:max-w-[420px] text-xs"
                headerStyles="md:text-lg lg:text-xl leading-6"
              >
                <div className="mt-[30px] md:mt-4 lg:mt-[28px] flex justify-between relative">
                  <p className="text-xs leading-[16.1px]">
                    {servicesIntl.raw("knowMore")}
                  </p>
                  <Image
                    src="/arrow-side-dark.png"
                    width={16}
                    height={16}
                    alt="arrow"
                  />
                </div>
              </Card>
            )
          )}
        </div>
      </div>
    </Section>
  );
};

export default AboutUs;
