import Image from 'next/image';

import { affectBold700, affectLight300, ppNeueMont500 } from '@/utils/fonts';

const Footer = () => {
  return (
    <footer className="flex-col justify-center items-center w-full relative bg-[#DFDFDF] pb-[30px]">
      <div
        className={`mx-auto w-[1300px] text-[#030303] uppercase ${affectLight300.className}`}
      >
        <div className="flex flex-col justify-center items-center">
          <h1
            className={`text-[197px] leading-[138.6px] tracking-[-3px] ${affectBold700.className}`}
          >
            FUTURE MARKT
          </h1>
          <p className="uppercase text-[40px] mt-6">Digital agency</p>
        </div>

        <div className="flex justify-between mt-[60px]">
          <div className="text-lg">
            <p className="">© Фьюче Маркт</p>
            <p>Информация о юридическом лице</p>
            <p className="text-xs text-[#7F7F7F]">
              Политика конфиденциальности
            </p>
          </div>

          <div className="text-lg text-right">
            <p className="">По всем вопросам:</p>
            <p>
              8 (999) 136-68-38
              <br />
              @yarkoch
            </p>
          </div>
        </div>

        <div
          className={`mt-[30px] border-t border-[#030303] flex justify-between pt-[20px] normal-case text-xs leading-[17.5px] ${ppNeueMont500.className}`}
        >
          <p>© Future Markt 2012–2024 All rights reserved</p>
          <a href="#" className="flex items-center">
            <Image
              src="/arrow-up-light.png"
              width={12}
              height={12}
              alt="arrow up"
            />
            Наверх
          </a>
        </div>

        <div className="mt-[30px] flex justify-between">
          {Object.entries(addresses).map(([phone, addr], index) => (
            <div
              key={index}
              className={`normal-case flex flex-col justify-between items-center text-xs leading-[17.5px] h-[70px] max-h-[70px] max-w-[345px] ${ppNeueMont500.className}`}
            >
              <p>{addr}</p>
              <p className="">{phone}</p>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

const addresses = {
  "+7 999 136 6838": "Россия, Нижний Новгород, Родионова 192В",
  "+972 54 9965034": "Israel 90435, Zeit Shemen St 2 Efrat",
  "+1 414 212 5484":
    "United States of America, Continure, 1366 E Sumner St #1008, Hartford WI 53027",
};

export default Footer;
