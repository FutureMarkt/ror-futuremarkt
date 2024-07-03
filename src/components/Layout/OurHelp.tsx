"use client";

import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { useClickAway } from 'react-use';

import { affect700, affectBold700, ppNeueMont500 } from '@/utils/fonts';

import Section from '../Section';

interface Projects {
  [key: string]: any;
}

interface Filters {
  [filter: string]: Projects;
}

const OurHelp = () => {
  const id = "our-help";
  const locale = useLocale();

  const ourHelpIntl = useTranslations("Index.OurHelp");
  const header = ourHelpIntl.raw("title");
  const responsiveHeader = ourHelpIntl.raw("adaptiveTitle");

  const popupRef = useRef<HTMLDivElement | null>(null);

  const [selectedFilter, setSelectedFilter] = useState(
    getSelectedFilter(locale)
  );
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [serviceDescription, setServiceDescription] = useState("");

  const filters = Object.entries(ourHelpIntl.raw("filters") as Filters);

  useClickAway(popupRef, (evt: MouseEvent) => {
    if (serviceDescription) {
      evt.preventDefault();
      evt.stopPropagation();
      setTimeout(() => {
        setServiceDescription("");
        document.body.style.overflow = "auto";
      }, 50);
    }
  });

  return (
    <>
      <div
        className={`w-full h-[100vh] z-20 ${
          serviceDescription ? "fixed pointer-events-all" : "hidden"
        }`}
      >
        <div className="bg-black opacity-70 fixed w-full left-0 top-0 h-full z-20"></div>

        <div className="w-full h-full top-0 left-0 fixed flex justify-center items-center z-30">
          <div
            className="w-4 h-4 absolute right-10 top-10 cursor-pointer"
            onClick={() => {
              setServiceDescription("");
              document.body.style.overflow = "auto";
            }}
          >
            <Image src={"/close.png"} width={16} height={16} alt="close" />
          </div>

          <div
            className="w-[340px] sm:w-[600px] md:w-[700px] h-[500px] md:h-[600px] bg-[#1D1D1D] rounded-[5px] p-6 overflow-auto"
            ref={popupRef}
          >
            <div className="flex flex-col justify-between h-full">
              <div className="text-[#FFFFFF]">{serviceDescription}</div>

              <a
                href="https://t.me/vitkoz"
                target="_blank"
                className={`text-[#FFDE9F] flex items-center cursor-pointer uppercase transition-all hover:brightness-75 ${ppNeueMont500.className}`}
                dir="ltr"
              >
                {locale === "he" && (
                  <Image
                    src={"/arrow-side-yellow.png"}
                    width={16}
                    height={16}
                    alt="arrow"
                    className="mr-[2px]"
                  />
                )}
                [{ourHelpIntl.raw("messageUs")}
                {locale !== "he" && (
                  <Image
                    src={"/arrow-side-yellow.png"}
                    width={16}
                    height={16}
                    alt="arrow"
                    className="ml-[2px]"
                  />
                )}
                ]
              </a>
            </div>
          </div>
        </div>
      </div>
      <Section
        id={id}
        header={header}
        adaptiveTitle={responsiveHeader}
        lgTitle={ourHelpIntl.rich("lgTitle", {
          break: (chunks) => (
            <>
              {chunks}
              <br></br>
            </>
          ),
        })}
        theme="light"
        customSectionStyles="h-fit transition-all duration-500"
      >
        <div className="mt-[34px] md:mt-0">
          {/* SERVICE FILTER */}
          <div className="flex gap-[18px] md:gap-[30px] justify-center text-[12px] md:text-lg">
            {filters.map(([filter, projects]) => (
              <button
                key={filter}
                className={`leading-4 md:leading-5 transition-all border-b-2 uppercase ${
                  filter === selectedFilter
                    ? "text-[#030303] border-[#030303]"
                    : "text-[#A0A0A0] border-[#A0A0A0] hover:text-[#030303] border-transparent"
                } `}
                onClick={() => setSelectedFilter(filter)}
              >
                {filter} [{Object.keys(projects).length}]
              </button>
            ))}
          </div>

          {/* LIST OF SERVICES */}
          <div className="mt-[30px] md:mt-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 h-fit transition-all duration-500">
            {selectedFilter &&
              filters.map(([filter, cards]) => {
                if (selectedFilter === filter) {
                  return Object.entries(cards).map(
                    ([cardTitle, { description, price }], index) => {
                      const isList = description.split("; ").length > 1;

                      return (
                        <div
                          key={cardTitle}
                          className={`md:w-full lg:max-w-[301px] 2xl:max-w-[420px] md:h-[260px] xl:h-[250px] 2xl:h-[232px] border border-[#030303] rounded-[5px] px-[17px] py-[20px] flex flex-col justify-start transition-all hover:bg-[#FFDE9F] cursor-pointer ${
                            isList ? "h-[232px]" : "h-[208px]"
                          }`}
                          onMouseEnter={() => setHoveredCard(index)}
                          onMouseLeave={() => setHoveredCard(null)}
                          onClick={() => {
                            console.log(
                              `filters.${selectedFilter}.${cardTitle}.fullDescription`
                            );
                            setServiceDescription(
                              // @ts-ignore
                              ourHelpIntl.rich(
                                `filters.${selectedFilter}.${cardTitle}.fullDescription`,
                                {
                                  mainTitle: (chunks) => (
                                    <>
                                      <h3
                                        className={`text-[#FFDE9F] text-xl mb-4 uppercase ${affect700.className}`}
                                      >
                                        {chunks}
                                      </h3>
                                    </>
                                  ),
                                  listLine: (chunks) => (
                                    <>
                                      <li className="text-xs leading-[16.1px] pl-[0.5rem]">
                                        {chunks}
                                      </li>
                                    </>
                                  ),
                                  list: (chunks) => (
                                    <>
                                      <ol className="ml-[15px] mt-3 list-decimal">
                                        {chunks}
                                      </ol>
                                    </>
                                  ),
                                  listCircle: (chunks) => (
                                    <>
                                      <ol className="ml-[15px] mt-3 list-disc">
                                        {chunks}
                                      </ol>
                                    </>
                                  ),
                                  paragraph: (chunks) => (
                                    <>
                                      <p className="text-xs leading-[16.1px]">
                                        {chunks}
                                      </p>
                                    </>
                                  ),
                                }
                              )
                            );
                            document.body.style.overflow = "hidden";
                          }}
                        >
                          <h3
                            className={`text-[22px] 2xl:text-xl leading-[22px] lg:leading-5 2xl:leading-6 tracking-[1px] uppercase ${affectBold700.className}`}
                          >
                            {cardTitle.replace("|", ".")}
                          </h3>
                          <div className="flex flex-col justify-between h-full">
                            <div
                              className={`mt-3 md:mt-4 leading-[16.1px] text-xs text-[#4C4C4C] marker: ${ppNeueMont500.className}`}
                            >
                              <ul className="list-[square]">
                                {/* CHECK IF THERE IS MORE THAN ONE ELEMENT IN THE OBJECT — IT OUTPUTS A BULLETED LIST, OTHERWISE WE JUST OUTPUT A DESCRIPTION */}
                                {isList
                                  ? description
                                      .split("; ")
                                      .map((desc: string, index: number) => (
                                        <li key={index} className="mx-[17px]">
                                          {desc}
                                        </li>
                                      ))
                                  : description}
                              </ul>
                            </div>
                            <div className="leading-[16.1px] text-xs flex justify-between items-center">
                              <p>
                                <span dir="rtl">
                                  {" "}
                                  {ourHelpIntl.raw("from")}
                                </span>
                                {price.includes("per")
                                  ? ` $${price} `
                                  : ` $${price} `}
                              </p>

                              <div
                                className={`w-4 h-4 relative transition-all ${
                                  hoveredCard === index
                                    ? "opacity-100"
                                    : "opacity-0"
                                }`}
                              >
                                <Image
                                  src={"/arrow-side-dark.png"}
                                  fill
                                  alt="arrow"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  );
                }
              })}
          </div>
        </div>
      </Section>
    </>
  );
};

function getSelectedFilter(locale: string) {
  if (locale === "he") return "פעילות פרויקטית";
  if (locale === "ru") return "Проектная деятельность";
  return "Project Activities";
}

export default OurHelp;
