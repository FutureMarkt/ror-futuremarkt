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
  const ourHelpIntl = useTranslations("Index.OurHelp");

  const id = "our-help";
  const header = ourHelpIntl.raw("title");

  const [selectedFilter, setSelectedFilter] = useState(
    "Проектная деятельность"
  );

  const filters = Object.entries(ourHelpIntl.raw("filters") as Filters);

  return (
    <Section id={id} header={header} theme="light">
      <div>
        {/* SERVICE FILTER */}
        <div className="flex gap-[30px] justify-center">
          {filters.map(([filter, projects]) => (
            <button
              key={filter}
              className={`leading-6 border-b-2  ${
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
        <div className="mt-[40px] grid grid-cols-3 gap-5">
          {selectedFilter &&
            filters.map(([filter, cards]) => {
              if (selectedFilter === filter) {
                return Object.entries(cards).map(
                  ([cardTitle, { description, price }]) => {
                    return (
                      <div
                        key={cardTitle}
                        className="lg:max-w-[301px] 2xl:max-w-[420px] border border-[#030303] rounded-[5px] px-[17px] py-[20px]"
                      >
                        <h3
                          className={`lg:text-[22px] 2xl:text-xl lg:leading-5 2xl:leading-6 ${affectBold700.className}`}
                        >
                          {cardTitle}
                        </h3>
                        <div
                          className={`mt-4 leading-[16.1px] text-xs text-[#4C4C4C] marker: ${ppNeueMont500.className}`}
                        >
                          <ul className=" list-[square]">
                            {/* CHECK IF THERE IS MORE THAN ONE ELEMENT IN THE OBJECT — IT OUTPUTS A BULLETED LIST, OTHERWISE WE JUST OUTPUT A DESCRIPTION */}
                            {description.split("; ").length > 1
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
                        <div className="mt-9 leading-[16.1px] text-xs">
                          {ourHelpIntl.raw("from")} ${price}
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
