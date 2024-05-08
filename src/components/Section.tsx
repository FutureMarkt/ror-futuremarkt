import { affectBold700, ppNeueMont500 } from '@/utils/fonts';

interface SectionProps {
  id: string;
  header: string;
  customHeader?: React.ReactNode;
  children: React.ReactNode;
  theme?: string;
}

const Section = ({
  id,
  header,
  customHeader = undefined,
  children,
  theme="dark",
}: SectionProps) => {
  return (
    <section
      id={id}
      className={`flex justify-center w-full h-[100vh] ${
        theme === "dark"
          ? "bg-[#030303] text-[#F7F7F7]"
          : "bg-[#DFDFDF] text-[#030303]"
      }`}
    >
      <div className="mx-auto w-[1300px]">
        {customHeader ? (
          customHeader
        ) : (
          <div
            className={`mt-12 uppercase text-[64px] text-center ${affectBold700.className}`}
          >
            <h1>{header}</h1>
          </div>
        )}
        <div className={`mt-[60px] text-[20px] ${ppNeueMont500.className}`}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
