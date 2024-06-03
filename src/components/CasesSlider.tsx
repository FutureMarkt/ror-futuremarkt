import 'swiper/css';
import 'swiper/css/scrollbar';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { affect700, ppNeueMontLight500 } from '@/utils/fonts';

interface Case {
  [key: string]: any;
}

interface Cases {
  [filter: string]: Case;
}

const CasesSlider = () => {
  const ourCasesIntl = useTranslations("Index.OurCases");

  const casesList = Object.entries(ourCasesIntl.raw("cases") as Cases).map(
    ([title, { description, img }], index) => (
      <div
        key={index}
        className={`w-[330px] md:w-[648px] lg:w-[411px] 2xl:w-[420px] transition-all `}
      >
        <div className="md:w-[648px] lg:w-[411px] h-[330px] md:h-[370px] relative">
          <Image
            src={`/_our-cases/${img}`}
            alt={img.split(".")[0]}
            fill
            className="bg-[#1D1D1D] rounded-[5px] object-contain"
          />
        </div>

        {/* CASE TITLE */}
        <h4
          className={`mt-3 flex justify-between items-baseline text-sm md:text-xl uppercase leading-6 tracking-[1px] cursor-pointer w-full ${affect700.className}`}
        >
          <span className="2xl:mr-4">{title}</span>
          <Image
            src="/_our-cases/arrow-side-light.png"
            width={16}
            height={16}
            alt="arrow"
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

    if (window.innerWidth <= 1024) {
      return 1.09;
    } else {
      return 2.25;
    }
  } catch (error) {}
};

export default CasesSlider;
