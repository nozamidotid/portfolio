import {useScroll, motion} from 'framer-motion';
import React, {useRef} from 'react';
import LiIcon from './LiIcon';

const Details = ({type, issuedBy, issued}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{y: 50}}
        whileInView={{y: 0}}
        transition={{duration: 0.5, type: 'spring'}}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
        <span className="capitalize font-medium text-dark dark:text-light xs:text-sm">{issuedBy}</span>
        <p className="capitalize font-medium text-dark/50 dark:text-light/50 md:text-sm">Issued {issued}</p>
      </motion.div>
    </li>
  );
};

const Licenses = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold w-full text-center mb-32 text-8xl md:text-6xl xs:text-4xl md:mb-16">
        Licenses & Certifications
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{scaleY: scrollYProgress}}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          d:w-[2px] md:left-[30px] xs:left-[20px]
          "
        />
        <ul className="flex flex-col w-full items-start justify-between ml-4 xs:ml-2">
          <Details
            type={'Belajar Membuat Aplikasi Back-End untuk Pemula'}
            issuedBy={'Dicoding Indonesia'}
            issued={'March 2023'}
          />
          <Details
            type={'Belajar Dasar-Dasar  Development and Operations (DevOps)'}
            issuedBy={'Dicoding Indonesia'}
            issued={'Dec 2022'}
          />

          <Details
            type={'Back End Development and APIs'}
            issuedBy={'freeCodeCamp'}
            issued={'Jan 2022'}
          />
          <Details
            type={'Menjadi Front-End Web Developer Expert'}
            issuedBy={'Dicoding Indonesia'}
            issued={'Jul 2021'}
          />
          <Details
            type={'Belajar Membuat Front-End Web untuk Pemula'}
            issuedBy={'Dicoding Indonesia'}
            issued={'Jun 2022'}
          />
          <Details
            type={'Belajar Fundamental Front-End Web Development'}
            issuedBy={'Dicoding Indonesia'}
            issued={'Oct 2020'}
          />
        </ul>
      </div>
    </div>
  );
};

export default Licenses;
