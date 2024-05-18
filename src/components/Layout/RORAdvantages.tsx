import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { affectBold700, ppNeueMontLight500 } from '@/utils/fonts';

import Section from '../Section';

const RORAdvantages = () => {
  const rorIntl = useTranslations("Index.RoRAdvantages");
  const ourApproachIntl = useTranslations("Index.OurApproach");

  const id = "advantages-ror";
  const header = rorIntl.raw("title");

  console.log(Object.entries(rorIntl.raw("advantages")));

  return (
    <Section id={id} header={header} theme="light">
      {/* RoR advantages */}
      <div className="flex items-center justify-between">
        <div className="lg:w-[412px] xl:w-[640px] lg:h-[529px] xl:h-[483px]">
          <Image
            src="/_ror/ruby-lg.png"
            width={412}
            height={529}
            placeholder="empty"
            alt="ruby"
            className="block 2xl:hidden"
          />
          <Image
            src="/_ror/ruby-xl.png"
            width={640}
            height={483}
            placeholder="empty"
            layout="response"
            alt="ruby"
            className="hidden 2xl:block"
          />
        </div>
        <div className="max-w-[640px] w-[640px]">
          {Object.entries(rorIntl.raw("advantages")).map(
            ([advt, desc], index) => (
              <div key={index} className={`${index === 2 ? "" : "mb-8"}`}>
                <h4
                  className={`text-xl uppercase leading-6 tracking-[1px] ${affectBold700.className}`}
                >
                  {advt}
                </h4>
                <p className="mt-4 leading-[23px] text-lg text-[#4C4C4C]">
                  {desc as string}
                </p>
              </div>
            )
          )}
        </div>
      </div>

      {/* OUR APPROACH */}
      <div className="mt-[120px]">
        <h1
          className={`uppercase tracking-[5px] text-2xl text-center ${affectBold700.className}`}
        >
          {ourApproachIntl.raw("title")}
        </h1>

        <div className="mt-[60px]">
          {Object.entries(ourApproachIntl.raw("approaches")).map(
            ([appr, desc], index) => (
              <div
                key={index}
                className={`flex justify-start text-xl tracking-[1px] py-[30px] border-b border-[#BDBDBD] leading-6 ${affectBold700.className}`}
              >
                <p>0{index + 1}</p>
                <div className="w-full flex justify-between lg:ml-[175px] 2xl:ml-[419px]">
                  <p className="uppercase lg:max-w-[193px] xl:max-w-full">
                    {appr}
                  </p>
                  <p
                    className={`text-xs max-w-[420px] leading-[16.1px] tracking-normal ${ppNeueMontLight500.className}`}
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
  );
};

export default RORAdvantages;
