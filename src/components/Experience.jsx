import {useScroll, motion} from 'framer-motion';
import React, {useRef} from 'react';
import LiIcon from './LiIcon';

const Details = ({position, company, companyLink, time, address, work}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{y: 50}}
        whileInView={{y: 0}}
        transition={{duration: 0.5, type: 'spring'}}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full text-justify md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold w-full text-center mb-32 text-8xl md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{scaleY: scrollYProgress}}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]
          "
        />
        <ul className="flex flex-col w-full items-start justify-between ml-4 xs:ml-2">
          <Details
            position={'Laravel Developer'}
            company={'PT Inosoft'}
            companyLink={'https://inosoftweb.com/'}
            time={'August 2022 - now'}
            address={'surabaya'}
            work={
              'I was responsible for developing and maintaining the back-end of the website. I worked on creating web applications using PHP and MySQL, designing database structures to store data efficiently, writing APIs to integrate with third-party services, testing code for bugs and debugging them when necessary. My work also included bug fixes and feature implementation using Git version control system.'
            }
          />
          <Details
            position={'Nodejs Developer'}
            company={'PT Sambung Digital Indonesia'}
            companyLink={
              'https://www.linkedin.com/in/robby-suliantoro-a2942515a/'
            }
            time={'Jan 2022 - Des 2022'}
            address={'Purwokerto'}
            work={
              'I worked as a Nodejs Developer for 1 year. My responsibilities included developing backend applications using Nodejs and PostgreSQL, designing REST APIs for  web services and managing deployment of applications in AWS cloud environment. Additionally, I also provided technical support to the development team and assisted in debugging issues faced during product rollout. Overall, it was an enriching experience that helped me hone my skills as a Backend Developer.'
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
