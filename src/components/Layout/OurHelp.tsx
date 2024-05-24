"use client";

import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { affectBold700, ppNeueMont500 } from '@/utils/fonts';

import Section from '../Section';

interface Projects {
  [key: string]: any;
}

interface Filters {
  [filter: string]: Projects;
}

const OurHelp = () => {
  const id = "our-help";

  const ourHelpIntl = useTranslations("Index.OurHelp");
  const header = ourHelpIntl.raw("title");
  const responsiveHeader = ourHelpIntl.raw("adaptiveTitle");

  const [selectedFilter, setSelectedFilter] = useState(
    "Проектная деятельность"
  );

  const filters = Object.entries(ourHelpIntl.raw("filters") as Filters);

  return (
    <Section
      id={id}
      header={header}
      adaptiveTitle={responsiveHeader}
      theme="light"
    >
      <div className="mt-[34px] md:mt-0">
        {/* SERVICE FILTER */}
        <div className="flex gap-[18px] md:gap-[30px] justify-center text-[12px] md:text-lg">
          {filters.map(([filter, projects]) => (
            <button
              key={filter}
              className={`leading-4 md:leading-5 border-b-2  ${
                filter === selectedFilter
                  ? "text-[#030303] border-[#030303]"
                  : "text-[#A0A0A0] border-[#A0A0A0]"
              } `}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter} [{Object.keys(projects).length}]
            </button>
          ))}
        </div>

        {/* LIST OF SERVICES */}
        <div className="mt-[30px] md:mt-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {selectedFilter &&
            filters.map(([filter, cards]) => {
              if (selectedFilter === filter) {
                return Object.entries(cards).map(
                  ([cardTitle, { description, price }]) => {
                    const isList = description.split("; ").length > 1;

                    return (
                      <div
                        key={cardTitle}
                        className={`md:w-full lg:max-w-[301px] 2xl:max-w-[420px] md:h-[260px] xl:h-[250px] 2xl:h-[232px] border border-[#030303] rounded-[5px] px-[17px] py-[20px] flex flex-col justify-start ${
                          isList ? "h-[232px]" : "h-[208px]"
                        }`}
                      >
                        <h3
                          className={`text-[22px] 2xl:text-xl leading-[22px] lg:leading-5 2xl:leading-6 tracking-[1px] uppercase ${affectBold700.className}`}
                        >
                          {cardTitle}
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
                                      <li key={index} className="ml-[17px]">
                                        {desc}
                                      </li>
                                    ))
                                : description}
                            </ul>
                          </div>
                          <div className="leading-[16.1px] text-xs">
                            {ourHelpIntl.raw("from")} ${price}
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
  );
};

export default OurHelp;
