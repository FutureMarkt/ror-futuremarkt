import Image from 'next/image';

import { affectBold700, ppNeueMontLight500 } from '@/utils/fonts';

import Card from '../Card';
import Section from '../Section';

const AboutUs = () => {
  const id = "about-us";
  const header = "о нашей компании";

  return (
    <Section id={id} header={header}>
      <p
        className={` text-center uppercase text-[36px] leading-9 ${affectBold700.className}`}
      >
        Future Markt – digital агентство, берущее своё начало в 2011 году.
        Мы создаём децентрализованные приложения и интерфейсы к ним,
        разрабатываем UX/UI дизайны и маркетинговые стратегии для продвижения
        проектов в сети.
      </p>

      {/* OUR ACHIEVEMENTS */}
      <div className="flex gap-5 mt-[60px]">
        {Object.entries(achiviements).map(([title, achieve], index) => (
          <Card
            key={index}
            title={title}
            content={achieve}
            classes="px-[30px] py-[20px]"
          />
        ))}
      </div>

      {/* CONNECT IN TELEGRAM */}
      <div className='flex justify-between mt-[100px] pt-[50px] h-[230px] bg-[url("/_about-us/promote.png")]'>
        <div className="max-w-[445px] w-[445px]">
          <h3
            className={`text-[48px] leading-[48px] tracking-[2px] ${affectBold700.className}`}
          >
            У вас есть идея?
          </h3>
          <p className="mt-[20px] text-lg leading-[20px]">
            Расскажите о ней нам, мы
            <br /> воплотим ее на Ruby on Rails
          </p>
        </div>
        <div className="mr-[78px]">
          <p className={`${ppNeueMontLight500.className}`}>
            Связаться через Телеграм:
          </p>

          <a href="#" className="flex items-center text-[#FFDE9F] mt-[15px]">
            [Ярослав, CMO{" "}
            <Image
              src="/arrow-side-yellow.png"
              width={16}
              height={16}
              alt="arrow"
              className="mx-1"
            />
            ]
          </a>

          <a href="#" className="flex items-center text-[#FFDE9F] mt-[15px]">
            [Виталий, product manager{" "}
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
      </div>

      {/* OUR OTHER SERVICES */}
      <div className="mt-[120px]">
        <h1
          className={`uppercase tracking-[5px] text-2xl text-center ${affectBold700.className}`}
        >
          другие наши услуги
        </h1>

        <div className="mt-[60px] flex gap-[21px] justify-center">
          {Object.entries(otherServices).map(([title, desc], index) => (
            <Card
              title={title}
              content={desc}
              key={index}
              classes="px-[17px] py-[20px]"
            >
              <div className="mt-[28px] flex justify-between">
                <p className='text-xs leading-[16.1px]'>Узнать подробнее</p>
                <Image src="/arrow-side-dark.png" width={16} height={16} alt="arrow" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};

const achiviements = {
  "15 лет с ruby on rails":
    "С 2009 года мы активно разрабатываем проекты на Ruby on Rails, непрерывно расширяя наш опыт и экспертизу",
  "58 проектов c ror":
    "Мы накопили весомый опыт в разработке веб-приложений, чтобы запустить ваш проект с минимумом рисков и ошибок",
  "сложные задачи - легко":
    "Решаем задачи любой сложности:  разработка API, разработка крупных веб-приложений, интеграция с внешними системами и другие",
};

const otherServices = {
  "Разработка web-3 проектов":
    "Разработка DeFi, Dao, dApp, Smart Contracts, Эдвайзеринг и консалтинг, разработка токена/крпитовалюты",
  "Веб-дизайн":
    "Разработка landing page, интернет-магазина, корпоративного сайта,брендбука, Ux/Ui интерфейса",
};

export default AboutUs;
