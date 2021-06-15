import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Pattern from '../components/Pattern';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <section className="grid grid-cols-1 pt-36 px-constrained overflow-visible md:pt-20 md:grid-cols-2 md:gap-x-24 md:px-constrained-md lg:pt-36 lg:gap-x-32 lg:px-constrained-lg">
      <h1 className="relative text-xl mb-4 md:mb-20 md:col-span-2 md:text-2xl lg:mb-11 xl:col-span-1 lg:text-3xl">
        The AP academy is the <u>online alternative provision</u> of choice for schools, commissioners and pupils.
        <Pattern className="absolute top-0 left-0 -mt-36 -ml-36 opacity-20" />
      </h1>

      <div className="col-start-1 mb-14">
        <p className="max-w-prose mb-4 md:text-lg md:mb-6">
          Providing flexible live interactive teaching. Bringing focussed quality teaching to vulnerable learners.
        </p>

        <p className="max-w-prose md:text-lg">
          Learners who cannot or will not attend mainstream school due to a range of conditions Including medical and
          other health issues.
        </p>
      </div>

      <div className="relative xl:row-start-1 xl:row-end-3 xl:col-start-2">
        <Pattern className="absolute top-0 right-0 md:-right-16 xl:top-2/3 xl:right-0" />

        <StaticImage
          src="../images/computer.jpg"
          alt=""
          quality={100}
          className="absolute top-16 border-8 border-white rounded-3xl w-3/4 md:z-10 md:right-12 xl:top-1/2 xl:max-w-3xl xl:transform xl:-translate-y-1/2 xl:right-1/4 xl:z-0"
        />

        <StaticImage
          src="../images/school.jpg"
          alt=""
          quality={100}
          className="absolute top-48 right-0 border-8 border-white rounded-3xl w-1/2 md:w-2/3 md:top-64 md:-right-20 xl:w-1/2 xl:top-0"
        />
      </div>
    </section>
  </Layout>
);

export default IndexPage;
