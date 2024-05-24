import { affectBold700, ppNeueMont500 } from '@/utils/fonts';

interface SectionProps {
  id: string;
  header: string;
  adaptiveTitle?: React.ReactNode;
  customHeader?: React.ReactNode;
  children: React.ReactNode;
  customContainerStyles?: string;
  theme?: string;
}

const Section = ({
  id,
  header,
  adaptiveTitle,
  customHeader = undefined,
  children,
  customContainerStyles,
  theme = "dark",
}: SectionProps) => {
  return (
    <section
      id={id}
      className={`flex justify-center items-center w-full h-fit py-[60px] md:py-[100px] 2xl:py-[120px] px-[15px] md:px-[30px] lg:px-7 overflow-x-hidden ${
        theme === "dark"
          ? "bg-[#030303] text-[#F7F7F7]"
          : "bg-[#DFDFDF] text-[#030303]"
      }`}
    >
      <div
        className={`max-w-[340px] md:max-w-[708px] lg:max-w-[964px] 2xl:max-w-[1300px] mx-auto ${customContainerStyles}`}
      >
        {customHeader ? (
          customHeader
        ) : (
          <div
            className={`uppercase tracking-[4px] leading-[40px] md:leading-[64px] text-[40px] md:text-2xl text-center ${affectBold700.className}`}
          >
            {adaptiveTitle ? (
              <>
                <h1 className="hidden md:block">{header}</h1>
                <h1 className="block md:hidden">{adaptiveTitle}</h1>
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
