import Image from 'next/image';

import { affect700, affectBold700, ppNeueMontLight500 } from '@/utils/fonts';

import Section from '../Section';

const OurCases = () => {
  const id = "our-cases";
  const header = "Наши кейсы";

  const customHeader: JSX.Element = (
    <div className={`text-center`}>
      <h1 className={`uppercase text-2xl ${affectBold700.className}`}>
        {header}
      </h1>
      <p
        className={`mt-6 leading-[23px] text-lg ${ppNeueMontLight500.className}`}
      >
        Наши проекты — лучшее подтверждение нашей экспертизы
      </p>
    </div>
  );

  return (
    <Section id={id} header={header} customHeader={customHeader}>
      {/* CASES LIST */}
      <div className="mt-[60px] flex justify-between">
        {[1, 2, 3].map((item) => (
          <div key={item} className="max-w-[420px]">
            <Image
              src="/_our-cases/money.png"
              width={420}
              height={370}
              alt="money"
              className="bg-[#1D1D1D] rounded-[5px]"
            />

            {/* CASE TITLE */}
            <h4
              className={`mt-3 flex items-end text-xl uppercase leading-6 tracking-[1px] ${affect700.className}`}
            >
              <span className="mr-4">Improving Credit Line Features </span>
              <Image
                src="/_our-cases/arrow-side-light.png"
                width={16}
                height={16}
                alt="arrow"
                className="mb-[2px]"
              />
            </h4>

            {/* CASE DESCRIPTION */}
            <p
              className={`mt-3 text-xs leading-[16.1px] ${ppNeueMontLight500.className}`}
            >
              Улучшили функциональность и пользовательский опыт внутри системы,
              обеспечивая более эффективное управление сделками и кредитными
              линиями
            </p>
          </div>
        ))}
      </div>

      {/* ORDER A PROJECT */}
      <div className="flex justify-center">
        <a
          href="#"
          className=" flex items-center mt-[60px] leading-5 text-[#FFDE9F] uppercase"
        >
          [Заказать проект{" "}
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
