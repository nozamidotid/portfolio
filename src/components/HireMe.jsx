import React from 'react';
import {CircularText} from './Icons';
import Link from 'next/link';

const HireMe = () => {
  return (
    <div className="fixed flex items-center justify-center overflow-hidden left-4 bottom-4 md:right-8 md:top-0 md:left-auto md:bottom-auto md:absolute">
      <div className="w-40 h-auto flex items-center justify-center relative md:w-24">
        <CircularText className={'fill-dark animate-spin-slow dark:fill-light'} />
        <Link
          href={'mailto:nozami.id@gmail.com'}
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold w-20 h-20 border-2 border-solid border-dark bg-dark text-light rounded-full shadow-md hover:bg-light hover:text-dark
          
          dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
          md:w-12 md:h-12 md:text-[10px]
          "
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
