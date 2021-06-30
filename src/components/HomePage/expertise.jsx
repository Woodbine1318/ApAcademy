import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Pattern from '../Pattern';

const Expertise = () => {
  return (
    <section
      className="relative py-16 px-constrained bg-white md:py-32 md:px-constrained-md lg:px-constrained-lg"
      id="experience"
    >
      <Pattern className="absolute top-0 left-0 opacity-20 transform -rotate-12 md:w-96 md:h-96 md:top-0" />

      <h2 className="text-lg text-center mb-16 md:text-xl">Our expertise</h2>

      <p className="md:max-w-prose mx-auto md:text-md md:text-center mb-8">
        AP Academy along with the wider BYT group has over 10 years of online and offline alternative provision.
      </p>

      <p className="md:max-w-prose mx-auto md:text-md md:text-center">
        Our deep expertise and specialist teachers with SEN qualifications deliver lessons online with an exceptionally
        small number of students in each class. Rarely reaching more than 4 The classrooms are straight forward with
        easy navigation, student interaction and lesson activities.
      </p>

      <div className="flex flex-col items-stretch pt-32 md:flex-row md:justify-evenly md:items-start lg:items-center lg:pt-48 lg:pb-24">
        <p className="flex flex-row items-start md:flex-col md:text-center md:items-center md:flex-1 lg:flex-row mb-16 md:mb-0 md:mr-16 lg:text-left">
          <span className="bg-shape flex justify-start pl-7 pt-2 items-center min-w-32 h-20 font-semibold text-xl text-white mr-7 bg-no-repeat bg-center md:mr-0 md:mb-7 lg:mb-0 lg:mr-7">
            +10
          </span>
          <span className="text-md">Years of alternative provision both online and offline</span>
        </p>

        <p className="flex flex-row items-start md:flex-col md:text-center md:items-center md:flex-1 lg:flex-row mb-16 md:mb-0 md:mr-16 lg:text-left">
          <span className="bg-shape flex justify-start pl-7 pt-2 items-center min-w-32 h-20 font-semibold text-xl text-white mr-7 bg-no-repeat bg-center md:mr-0 md:mb-7 lg:mb-0 lg:mr-7">
            700
          </span>
          <span className="text-md">Pupils a year either educational support or alternative online provision</span>
        </p>

        <p className="flex flex-row items-start md:flex-col md:text-center md:items-center md:flex-1 lg:flex-row lg:text-left">
          <span className="bg-shape flex justify-start pl-7 pt-2 items-center min-w-32 h-20 font-semibold text-xl text-white mr-7 bg-no-repeat bg-center md:mr-0 md:mb-7 lg:mb-0 lg:mr-7">
            45
          </span>
          <span className="text-md">Local authorities supported</span>
        </p>
      </div>

      <StaticImage
        src="../../images/home-page/alternative-provision-online.png"
        alt=""
        className="block max-w-5xl mx-auto -mb-16 md:-mb-32"
      />
    </section>
  );
};

export default Expertise;
