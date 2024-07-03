import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { useClickAway } from 'react-use';

import { affect700 } from '@/utils/fonts';

const LocaleSwitcher = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const localeSwitcherRef = useRef(null);

  const locale = useLocale();

  useClickAway(localeSwitcherRef, () => setIsOpenDropdown(false))

  return (
    <div className="flex flex-col items-center justify-center mt-[60px] md:mt-[50px] xl:mt-0 relative">
      <p
        className={`text-lg md:text-[40px] lg:text-[48px] xl:text-[20px] leading-[24px] md:leading-[40px] flex gap-[6px] items-center uppercase w-[56px] xl:w-[44px] cursor-pointer ${affect700.className}`}
        onClick={() => setIsOpenDropdown(!isOpenDropdown)}
      >
        {locale}
        <Image
          src={"/_header/arrow-down-primary.png"}
          width={14}
          height={9}
          alt="arrow"
          className={`w-6 xl:w-[14px] h-4 xl:h-[9px] transition-all ${
            isOpenDropdown ? "rotate-180" : "rotate-0"
          }`}
        />
      </p>

      <div
        className={`flex-col items-center transition-all mt-2 xl:mt-0 ${
          isOpenDropdown ? "flex" : "hidden"
        }`}
        ref={localeSwitcherRef}
      >
        <div className="absolute z-10 rounded-[5px] bg-[#030303] w-[64px] xl:w-[48px] p-2 pb-4 xl:p-1 border flex flex-col gap-2 xl:gap-0">
          {locales.map((localeItem) => (
            <Link
              key={localeItem}
              href={`/${localeItem}`}
              className={`text-lg md:text-[40px] lg:text-[48px] xl:text-[20px] leading-[24px] md:leading-[40px] flex gap-[6px] items-center justify-center uppercase hover:text-[#FFDE9F] transition-all ${
                affect700.className
              } ${locale === localeItem ? "text-[#FFDE9F]" : ""}`}
            >
              {localeItem}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const locales = ["en", "ru", "he"];

export default LocaleSwitcher;
