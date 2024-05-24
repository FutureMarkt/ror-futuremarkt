import { useLocale } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';

import { affect700 } from '@/utils/fonts';

const LocaleSwitcher = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const locale = useLocale();

  return (
    <div className="flex flex-col items-center justify-center mt-[60px] md:mt-[50px] xl:mt-0 relative w-[77px]">
      <p
        className={`text-lg md:text-[40px] lg:text-[48px] xl:text-[20px] leading-[24px] md:leading-[40px] flex gap-[6px] items-center uppercase ${affect700.className}`}
        onClick={() => setIsOpenDropdown(!isOpenDropdown)}
      >
        {locale}
        <Image
          src={"/_header/arrow-down-primary.png"}
          width={14}
          height={9}
          alt="arrow"
          className="w-6 xl:w-[14px] h-4 xl:h-[9px]"
        />
      </p>

      <div
        className={`flex-col items-center ${
          isOpenDropdown ? "flex" : "hidden"
        }`}
      >
        <div className="absolute rounded-[5px] bg-[#030303] w-[77px]">
          <p
            className={`text-lg md:text-[40px] lg:text-[48px] xl:text-[20px] leading-[24px] md:leading-[40px] flex gap-[6px] items-center uppercase ${affect700.className}`}
          >
            RU
          </p>
          <p
            className={`text-lg md:text-[40px] lg:text-[48px] xl:text-[20px] leading-[24px] md:leading-[40px] flex gap-[6px] items-center uppercase ${affect700.className}`}
          >
            RU
          </p>
          <p
            className={`text-lg md:text-[40px] lg:text-[48px] xl:text-[20px] leading-[24px] md:leading-[40px] flex gap-[6px] items-center uppercase ${affect700.className}`}
          >
            RU
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocaleSwitcher;
