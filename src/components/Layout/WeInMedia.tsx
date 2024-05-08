import Image from 'next/image';

import { affectBold700, affectLight300, ppNeueMont500 } from '@/utils/fonts';

import Section from '../Section';

const WeInMedia = () => {
  const id = "we-in-media";
  const header = "Мы в медиа";

  return (
    <Section id={id} header={header} theme="light">
      {/* OUR MEDIA  */}
      <div className="flex gap-[30px]">
        {/* ARTICLES */}
        {Object.entries(weInMedia).map(
          ([title, { desc, img, textStyle }], index) => (
            <div key={index} className="flex flex-col max-w-[635px]">
              <Image
                src={`/_we-in-media/${img}`}
                width={635}
                height={400}
                alt={img.split(".")[0]}
              />
              <div className="mt-3">
                <h4 className={`uppercase ${affectBold700.className}`}>
                  {title}
                </h4>
                <p
                  className={`text-xs text-[#4C4C4C] leading-[16.1px] mt-1 ${ppNeueMont500.className}`}
                >
                  {desc}
                </p>
                <button
                  className={`text-xs leading-[16.1px] mt-6 ${ppNeueMont500.className}`}
                >
                  [Читать полностью]
                </button>
              </div>
            </div>
          )
        )}
      </div>

      {/* VIDEO */}
      <div className="mt-[60px]">
        <div className="w-[1300px] h-[731px] bg-[#030303]"></div>
      </div>

      {/* SOOCIAL MEDIA */}
      <div className="flex justify-center gap-4 mt-[60px]">
        {socialMedia.map((icon) => (
          <a
            key={icon}
            href="#"
            className="flex justify-center items-center w-[60px] h-[60px] border border-[#030303] rounded-[5px]"
          >
            <img src={`/_we-in-media/${icon}`} alt={`${icon.split(".")[0]}`} />
          </a>
        ))}
      </div>

      {/* HAVE A QUESTION */}
      <div className="mt-[120px] flex flex-col items-center">
        <div className="max-w-[803px] text-center">
          <h1
            className={`uppercase tracking-[4px] text-2xl text-center ${affectBold700.className}`}
          >
            Остались вопросы?
          </h1>
          <p
            className={`text-[32px] leading-[32px] ${affectLight300.className}`}
          >
            Оставляйте заявку или напишите нам в Telegram, наши специалисты
            свяжутся с вами и ответят на любой ваш вопрос
          </p>
        </div>

        <div className="mt-[60px] flex gap-[48px] items-center">
          <button
            className={`py-[17px] px-[30px] flex items-center bg-[#FFDE9F] border border-[#030303] rounded-[5px] uppercase ${ppNeueMont500.className}`}
          >
            написать в телеграм{" "}
            <Image
              src="/arrow-side-dark.png"
              width={16}
              height={16}
              alt="arrow"
              className="ml-4 mr-5"
            />
          </button>

          <a href="" className="flex items-center uppercase">
            [оставить заявку{" "}
            <Image
              src="/arrow-side-dark.png"
              width={16}
              height={16}
              alt="arrow"
              className="mx-1"
            />
            ]
          </a>
        </div>
      </div>
    </Section>
  );
};

const weInMedia = {
  "Мощный фреймворк для создания API на Ruby": {
    desc: "Если вы занимаетесь разработкой веб-приложений или API, вы, вероятно, слышали о Grape — мощном фреймворке на языке программирования Ruby",
    img: "grape.png",
    textStyle: "",
  },
  "Разработка чат-ботов с использованием Ruby": {
    desc: "Ruby делает разработку чат-ботов быстрой и простой. В этой статье мы рассмотрим преимущества Ruby для разработки чат-ботов с примерами кода",
    img: "robot.png",
    textStyle: "",
  },
};

const socialMedia = [
  "behance.png",
  "youtube.png",
  "tg.png",
  "vk.png",
  "inst.png",
  "vc.png",
  "habr.png",
];

export default WeInMedia;
