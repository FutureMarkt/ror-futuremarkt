import Image from 'next/image';

import { affect300, affect700, ppNeueMont500 } from '@/utils/fonts';

const Header = () => {
  return (
    <section
      id="header"
      className="flex justify-center w-full h-[100vh] bg-[#030303]"
    >
      <div className="mx-auto w-[1300px] text-[#F7F7F7]">
        {/* NAVIGATION */}
        <div className="flex justify-between items-center mt-[20px] px-[20px] py-[10px] border rounded-[5px]">
          {/* HEADER LOGO */}
          <div className="max-w-[255px]">
            <h1
              className={`text-[37.65px] leading-[48.72px] ${affect700.className}`}
            >
              FUTURE MARKT
            </h1>
            <p
              className={`text-[16.73px] leading-[20.3px] tracking-[4px] ${affect300.className}`}
            >
              DIGITAL AGENCY
            </p>
          </div>

          {/* HEADER NAV LINKS */}
          <nav
            className={`flex justify-between w-[584px] text-[20px] ${ppNeueMont500.className}`}
          >
            {Object.entries(navLinks).map(([name, link]) => (
              <a key={link} href={`${link}`} className="leading-[20px]">
                [{name}]
              </a>
            ))}
          </nav>

          {/* CONTACT AND SET LANG LINKS */}
          <div className="flex">
            <a
              href="#"
              className={`text-[#FFDE9F] flex items-center cursor-pointer mx-[38.67px] {ppNeueMont500.className}`}
            >
              [НАПИСАТЬ В ТЕЛЕГРАМ
              <Image
                src={"/_header/arrow-side-yellow.png"}
                width={16}
                height={16}
                alt="arrow"
                className="ml-[2px]"
              />
              ]
            </a>
            <a
              href="#"
              className={`text-[20px] flex gap-[6px] items-center ${affect700.className}`}
            >
              RU
              <Image
                src={"/_header/arrow-down-primary.png"}
                width={14}
                height={9}
                alt="arrow"
              />
            </a>
          </div>
        </div>

        {/* HEADER TITLE */}
        <div
          className={`flex flex-col items-center mt-[120px] text-[20px] tracking-[3px] ${ppNeueMont500.className}`}
        >
          <p className={`leading-[20px]`}>Внедрение проекта за 1 месяц!</p>
          <div
            className={`text uppercase text-[85px] text-center leading-[85px] max-w-[1300px] ${affect700.className}`}
          >
            <h1>
              быстрая разработка
              <br />
              вашей идеи на ruby on rails
            </h1>
          </div>

          {/* GET FREE CONSULTATION */}
          <div className="flex flex-col items-center mt-[60px]">
            <p className="max-w-[830px] text-center leading-[20px]">
              На бесплатной консультации вы получите анализ
              <br />
              потенциала и дорожную карту для успешного запуска
            </p>
            <button className="px-[26px] py-[15px] bg-[#FFDE9F] rounded-[5px] mt-[48px]">
              <div className={`flex items-center uppercase text-[#030303]`}>
                Получить бесплатную консультацию{" "}
                <Image
                  src="/_header/arrow-side-dark.png"
                  width={16}
                  height={16}
                  alt="arrow"
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* TICKING LINE */}
      <div
        className={`w-[150vw] flex gap-[24px] absolute text-[#FFDE9F] text-[24px] leading-[24px] uppercase left-0 bottom-[100px] ${affect700.className}`}
      >
        {/* CYCLES FOR TICKING LINE OUTPUT */}
        {trickerWords.map((word, index) => (
          <div key={index} className="">
            {word}
          </div>
        ))}
        {trickerWords.map((word, index) => (
          <div key={index} className="">
            {word}
          </div>
        ))}
      </div>
    </section>
  );
};

const navLinks = {
  Услуги: "#",
  Кейсы: "#",
  "Преимущества RoR": "#",
  "О нас": "#",
};

const trickerWords = [
  "Высоконагруженные порталы",
  "CRM системы",
  "ERP",
  "Техническая поддержка проекта/обновления версий",
];

export default Header;
