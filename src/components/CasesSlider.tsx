import 'swiper/css';
import 'swiper/css/scrollbar';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ReactNode, useState } from 'react';
import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { affect700, affectBold700, ppNeueMontLight500 } from '@/utils/fonts';

interface Case {
  [key: string]: any;
}

interface Cases {
  [filter: string]: Case;
}

interface CasesSliderProps {
  modalContent: ReactNode | null;
  setModalContent: (content: ReactNode) => void;
}

const CasesSlider = ({ modalContent, setModalContent }: CasesSliderProps) => {
  const [hoveredCase, setHoveredCase] = useState<number | null>(null);
  const [cardOpened, setCardOpened] = useState<number | null>(null);
  const [showDescription, setShowDesription] = useState<number | null>(null);

  const ourCasesIntl = useTranslations("Index.OurCases");

  const casesList = Object.entries(ourCasesIntl.raw("cases") as Cases).map(
    ([title, { description, img, goal, fullDescription }], index) => (
      <div
        key={index}
        className={`w-[330px] md:w-[648px] lg:w-[411px] 2xl:w-[420px] transition-all duration-500 cursor-pointer`}
        onMouseEnter={() => setHoveredCase(index)}
        onMouseLeave={() => {
          setHoveredCase(null);
          setCardOpened(null);
        }}
      >
        <div className="md:w-[648px] lg:w-[411px] xl:w-[420px] h-[330px] md:h-[370px] relative bg-[#1D1D1D] rounded-[5px] overflow-hidden">
          <div
            className={`bg-black w-full h-full transition-all duration-500 absolute z-10 opacity-0 ${
              hoveredCase === index ? "xl:opacity-70" : "xl:opacity-0"
            }`}
          ></div>

          {ourCasesIntl.raw(`cases.${title}.link`) && (
            <a
              href={ourCasesIntl.raw(`cases.${title}.link`)}
              className="w-full h-full z-30 absolute"
              target="_blank"
            ></a>
          )}

          <div
            className={`w-full h-full absolute z-20 duration-500 p-6 xl:block ${
              hoveredCase === index ? "xl:opacity-100" : "opacity-0"
            } ${hoveredCase === index ? "transition-all" : ""}`}
            onClick={() => {
              if (fullDescription) {
                // setCardOpened(index);
                document.body.style.overflow = "hidden";
                setModalContent(
                  ourCasesIntl.rich(`cases.${title}.fullDescription`, {
                    yellowHeader: (chunks) => (
                      <h4
                        className={`text-xl leading-6 text-[#FFDE9F] uppercase ${affectBold700.className}`}
                      >
                        {chunks}
                      </h4>
                    ),
                    whiteHeader: (chunks) => (
                      <h4
                        className={`text-xl leading-6 mt-4 text-[#FFDE9F] uppercase ${affectBold700.className}`}
                      >
                        {chunks}
                      </h4>
                    ),
                    break: (chunks) => <>{chunks}</>,
                    paragraph: (chunks) => (
                      <p className="text-xs leading-[16.1px] mt-2 text-[#FFFFFF]">
                        {chunks}
                      </p>
                    ),
                    yellowMarginHeader: (chunks) => (
                      <h4
                        className={`text-xl leading-6 text-[#FFDE9F] uppercase mt-4 ${affectBold700.className}`}
                      >
                        {chunks}
                      </h4>
                    ),
                  })
                );
              }
            }}
          >
            {/* <div
              className={`transition-all duration-500 h-full absolute ${
                cardOpened === index ? "opacity-100" : "opacity-0"
              }`}
            >
              {modalContent}
            </div> */}

            <div
              className={`flex-col justify-between h-full transition-all duration-500 hidden xl:flex ${
                cardOpened === index ? "opacity-0" : "opacity-100"
              }`}
              onTransitionEnd={() => {
                setShowDesription(cardOpened);
              }}
            >
              <div>
                <h3
                  className={`text-xl leading-6 uppercase text-[#FFDE9F] ${affectBold700.className}`}
                >
                  {ourCasesIntl.raw("goalText")}
                </h3>

                {/* CASE GOAL */}
                <p className="text-xs leading-[16.1px] mt-2">{goal}</p>
              </div>

              <div className="text-lg leading-5 text-[#FFDE9F] uppercase z-30">
                <p className="flex items-center">
                  [{ourCasesIntl.raw("learnMore")}{" "}
                  <Image
                    src={"/arrow-side-yellow.png"}
                    width={16}
                    height={16}
                    alt="arrow"
                    className='ml-[6px]'
                  />
                  ]
                </p>
              </div>
            </div>
          </div>

          <Image
            src={`/_our-cases/${img}`}
            alt={img.split(".")[0]}
            fill
            className={`rounded-[5px] object-contain transition-all duration-300 ${
              hoveredCase === index ? "xl:blur-lg" : "xl:blur-none"
            }`}
          />
        </div>

        {/* CASE TITLE */}
        <h4
          className={`mt-3 flex justify-between items-baseline text-sm md:text-xl uppercase leading-6 tracking-[1px] cursor-pointer w-full ${affect700.className}`}
        >
          <span>{title}</span>
          <Image
            src="/_our-cases/arrow-side-light.png"
            width={16}
            height={16}
            alt="arrow"
            className={`transition-all duration-300 hidden lg:block ${
              hoveredCase === index
                ? "opacity-0 xl:opacity-100"
                : "xl:opacity-0"
            }`}
          />
        </h4>

        {/* CASE DESCRIPTION */}
        <p
          className={`mt-3 md:w-[648px] lg:max-w-[412px] 2xl:w-auto text-[12px] md:text-xs leading-[16.1px] text-[#F7F7F7] ${ppNeueMontLight500.className}`}
        >
          {description}
        </p>
      </div>
    )
  );

  return (
    <Swiper
      slidesPerView={getShownSlides()}
      spaceBetween={20}
      freeMode={true}
      modules={[Scrollbar]}
      scrollbar={{
        hide: true,
      }}
      allowTouchMove={true}
      simulateTouch={true}
      mousewheel={false}
      className="cursor-grab"
    >
      {casesList.map((ourCase, index) => (
        <SwiperSlide key={index}>{ourCase}</SwiperSlide>
      ))}
    </Swiper>
  );
};

const getShownSlides = () => {
  try {
    if (window.innerWidth < 768) {
      return 1;
    }

    if (window.innerWidth >= 1600) {
      return 3;
    }

    if (window.innerWidth < 1600 && window.innerWidth > 1024) {
      return 2.25;
    }

    if (window.innerWidth < 1024) {
      return 1.09;
    } else {
      return 2.25;
    }
  } catch (error) {}
};

export default CasesSlider;
