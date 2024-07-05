import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';

import { affectBold700, ppNeueMontLight500 } from '@/utils/fonts';

import Section from '../Section';

const RORAdvantages = () => {
  const locale = useLocale();
  const rorIntl = useTranslations("Index.RoRAdvantages");
  const ourApproachIntl = useTranslations("Index.OurApproach");

  const id = "advantages-ror";
  const header = rorIntl.rich("title", {
    break: (chunks) => (
      <>
        {chunks}
        <br></br>
      </>
    ),
  });

  return (
    <div className="relative -z-10">
      <div className="absolute left-0 top-[408px] w-[139px] h-[236px] hidden md:block lg:hidden">
        <Image src={"/_ror/half-ruby.png"} fill alt="half-ruby" />
      </div>
      <div className="absolute w-full flex justify-center top-[281px]">
        <div className="block w-[327px] h-[277px] md:hidden relative">
          <Image src={"/_ror/ruby-mobile.png"} fill alt="ruby" />
        </div>
      </div>
      <Section id={id} header={header} theme="light">
        {/* RoR advantages */}
        <div className="flex items-center justify-between relative mt-[30px] md:mt-0">
          <div className={`hidden md:flex justify-center items-center lg:w-[412px] xl:w-[616px] h-[520px] ${locale !== "en" ? "xl:h-[575px]" : "xl:h-[568px]"} 2xl:h-[430px] relative`}>
            <Image src={"/_ror/ruby-text.png"} fill alt="ruby-code" className={`${locale !== "he" ? "" : "rotate-y-180"}`} />
            <div className="relative lg:w-[383px] xl:w-[478px] lg:h-[325px] xl:h-[405px]">
              <Image src={"/_ror/ruby.png"} fill alt="ruby-code" className="" />
            </div>
            {/* <Image
              src="/_ror/ruby-xl.png"
              fill
              placeholder="empty"
              alt="ruby"
              className={`md:hidden lg:block 2xl:hidden object-contain ${
                locale === "he" ? "rotate-y-180" : ""
              }`}
            />
            <Image
              src={`/_ror/ruby-xl${locale === "he" ? "-he" : ""}.png`}
              width={640}
              height={483}
              placeholder="empty"
              alt="ruby"
              className="hidden 2xl:block"
            /> */}
          </div>
          <div className={`md:pl-[45px] lg:pl-0 max-w-[522px] 2xl:max-w-[640px] ${locale !== "he" ? "md:ml-[44px]" : "md:mr-[44px]"}`}>
            {Object.entries(rorIntl.raw("advantages")).map(
              ([advt, desc], index) => (
                <div
                  key={index}
                  className={`${index === 2 ? "" : "mb-6 md:mb-8"}`}
                >
                  <h4
                    className={`text-xl uppercase leading-6 tracking-[1px] ${affectBold700.className}`}
                  >
                    {advt}
                  </h4>
                  <p
                    className={`mt-3 md:mt-4 leading-[18.4px] md:leading-[23px] text-sm md:text-lg text-[#4C4C4C] ${
                      locale === "he" ? "text-right" : ""
                    }`}
                    dir="ltr"
                  >
                    {desc as string}
                  </p>
                </div>
              )
            )}
          </div>
        </div>

        {/* OUR APPROACH */}
        <div className="mt-[60px] md:mt-[100px] lg:mt-[120px]">
          <h1
            className={`uppercase tracking-[5px] leading-[40px] md:leading-[64px] text-[40px] md:text-2xl text-center ${affectBold700.className}`}
          >
            {ourApproachIntl.rich("title", {
              break: (chunks) => (
                <>
                  {chunks}
                  <br />
                </>
              ),
              breakLg: (chunks) => (
                <>  
                  {chunks}
                  <br className='lg:hidden'></br>
                </>
              )
            })}
          </h1>

          <div className="mt-[60px] flex flex-col gap-[30px] md:block">
            {Object.entries(ourApproachIntl.raw("approaches")).map(
              ([appr, desc], index) => (
                <div
                  key={index}
                  className={`flex gap-3 md:gap-0 justify-between text-xl tracking-[1px] pb-3 md:py-[30px] border-b border-[#BDBDBD] leading-6 ${affectBold700.className}`}
                >
                  <p className="w-auto md:w-[40px]">0{index + 1}</p>
                  <div
                    className={`w-[87%] flex flex-col md:flex-row justify-between ${
                      locale === "he"
                        ? "lg:mr-[175px] 2xl:mr-[375px]"
                        : "lg:ml-[175px] 2xl:ml-[375px]"
                    }`}
                  >
                    <p className="uppercase md:max-w-[193px] 2xl:max-w-full">
                      {appr}
                    </p>
                    <p
                      className={`text-xs mt-3 md:mt-0 md:max-w-[334px] lg:max-w-[420px] leading-[16.1px] tracking-normal ${
                        ppNeueMontLight500.className
                      } ${locale === "he" ? "text-left" : ""}`}
                    >
                      {desc as string}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default RORAdvantages;
