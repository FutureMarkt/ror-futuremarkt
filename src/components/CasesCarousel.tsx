// "use client";

// import { useTranslations } from 'next-intl';
// import Image from 'next/image';
// import { useSpringCarousel } from 'react-spring-carousel';

// import { affect700, ppNeueMontLight500 } from '@/utils/fonts';

// interface Case {
//   [key: string]: any;
// }

// interface Cases {
//   [filter: string]: Case;
// }

// const CasesCarousel = () => {
//   const ourCasesIntl = useTranslations("Index.OurCases");

//   const casesList = Object.entries(ourCasesIntl.raw("cases") as Cases).map(
//     ([title, { description, img }], index) => (
//       <div
//         key={index}
//         className={`w-[330px] md:w-[648px] lg:w-[411px] 2xl:w-[420px] transition-all `}
//       >
//         <div className="md:w-[648px] lg:w-[411px] h-[330px] md:h-[370px] relative">
//           <Image
//             src={`/_our-cases/${img}`}
//             alt={img.split(".")[0]}
//             fill
//             className="bg-[#1D1D1D] rounded-[5px] lg:object-contain"
//           />
//         </div>

//         {/* CASE TITLE */}
//         <h4
//           className={`mt-3 flex justify-between items-baseline text-sm md:text-xl uppercase leading-6 tracking-[1px] cursor-pointer w-full ${affect700.className}`}
//         >
//           <span className="2xl:mr-4">{title}</span>
//           <Image
//             src="/_our-cases/arrow-side-light.png"
//             width={16}
//             height={16}
//             alt="arrow"
//           />
//         </h4>

//         {/* CASE DESCRIPTION */}
//         <p
//           className={`mt-3 md:w-[648px] lg:max-w-[412px] 2xl:w-auto text-[12px] md:text-xs leading-[16.1px] text-[#F7F7F7] ${ppNeueMontLight500.className}`}
//         >
//           {description}
//         </p>
//       </div>
//     )
//   );

//   const { carouselFragment } = useSpringCarousel({
//     disableGestures: false,
//     enableFreeScrollDrag: true,
//     itemsPerSlide: 1,
//     gutter: 30,
//     items: [
//       { id: 1, renderItem: casesList[0] },
//       { id: 2, renderItem: casesList[1] },
//       { id: 3, renderItem: casesList[2] },
//     ],
//   });

//   return carouselFragment;
// };

// export default CasesCarousel;
