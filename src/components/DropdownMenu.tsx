import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

import { ppNeueMont500 } from '@/utils/fonts';

import LocaleSwitcher from './LocalSwitcher';

const DropdownMenu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const headerIntl = useTranslations("Index.Header");

  return (
    <div
      className={`fixed w-full h-[100vh] z-20 transition-all duration-500 text-[#F7F7F7] bg-[#030303] overflow-hidden ${
        isOpen ? "top-0" : "top-[-100vh]"
      }`}
    >
      <Image
        src="/ruby.png"
        width={150}
        height={150}
        alt=""
        className="absolute mt-[160px] left-[20px] -rotate-[9deg] hidden md:block"
      />
      <Image
        src="/ruby.png"
        width={300}
        height={300}
        alt=""
        className="absolute mt-[460px] -right-[70px] rotate-[15deg] hidden md:block"
      />
      <Image src={"/_header/dropdown-menu-bg.png"} fill alt="" />
      <div className="absolute z-30 w-full h-full px-[15px] md:px-[30px] py-[18px] md:py-[30px]">
        <div className="flex justify-between">
          <div
            onClick={() => {
              setIsOpen(false);
              document.body.style["overflowY"] = "scroll";
            }}
          >
            <Image
              src="/_header/close-icon.svg"
              width={22}
              height={22}
              alt="close-icon"
            />
          </div>

          <a
            href="https://t.me/vitkoz"
            target="_blank"
            className={`text-[#FFDE9F] text-xs md:text-lg flex items-center cursor-pointe uppercase ${ppNeueMont500.className}`}
          >
            [{headerIntl.raw("messageUs")}
            <Image
              src={"/arrow-side-yellow.png"}
              width={16}
              height={16}
              alt="arrow"
              className="mx-[2px] w-[11.33px] md:w-[16px] h-[11.33px] md:h-[16px]"
            />
            ]
          </a>
        </div>

        <div
          className={`flex flex-col mt-[210px] md:mt-[100px] items-center text-sm md:text-[48px] leading-[24px] md:leading-[48px] h-full ${ppNeueMont500.className}`}
        >
          <div className="flex flex-col items-center gap-[30px] md:gap-[50px]">
            {Object.entries(headerIntl.raw("navLinks")).map(([name, link]) => (
              <Link
                key={name}
                href={`${link}`}
                onClick={() => {
                  setIsOpen(false);
                  document.body.style["overflowY"] = "scroll";
                }}
              >
                [{name}]
              </Link>
            ))}
          </div>
          <LocaleSwitcher />
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
