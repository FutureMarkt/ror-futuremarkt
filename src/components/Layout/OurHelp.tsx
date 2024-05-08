import { affectBold700, ppNeueMontLight500 } from '@/utils/fonts';

import Section from '../Section';

const OurHelp = () => {
  const id = "our-help";
  const header = "чем мы можем вам помочь";

  return (
    <Section id={id} header={header} theme="light">
      <div>
        {/* SERVICE FILTER */}
        <div className="flex gap-[30px] justify-center">
          {filters.map((filter) => (
            <a
              key={filter}
              href=""
              className="leading-6 border-b-2 border-[#030303]"
            >
              {filter} [0]
            </a>
          ))}
        </div>

        {/* LIST OF SERVICES */}
        <div className="mt-[40px] grid grid-cols-3 gap-5">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              key={item}
              className="max-w-[420px] border border-[#030303] rounded-[5px] px-[17px] py-[20px]"
            >
              <h3 className={`text-xl ${affectBold700.className}`}>
                Разработка веб-проектов
              </h3>
              <div
                className={`mt-4 leading-[16.1px] text-xs text-[#4C4C4C] ${ppNeueMontLight500.className}`}
              >
                Создание качественных и масштабируемых веб-приложений
                с использованием мощного и гибкого фреймворка - Ruby on Rails
              </div>
              <div className="mt-9 leading-[16.1px] text-xs">от $00 000</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const filters = ["Проектная деятельность", "Аутстаффинг"];

export default OurHelp;
