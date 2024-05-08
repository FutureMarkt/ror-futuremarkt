import { ReactNode } from 'react';

import { affectBold700, ppNeueMont500 } from '@/utils/fonts';

interface CardProps {
  title: string;
  content: string;
  children?: ReactNode;
  classes?: string;
}

const Card = ({ title, content, children, classes }: CardProps) => {
  return (
    <div
      className={`text-[#030303] max-w-[420px] w-[420px] border rounded-[5px] bg-[#DFDFDF]  ${classes}`}
    >
      <h4 className={`uppercase ${affectBold700.className}`}>{title}</h4>
      <p
        className={`text-xs text-[#4C4C4C] mt-4 leading-[16.1px] ${ppNeueMont500.className}`}
      >
        {content}
      </p>
      {children}
    </div>
  );
};

export default Card;
