import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Pattern from '../Pattern';

const Support = () => {
  return (
    <section
      className="relative py-16 px-constrained md:py-32 md:px-constrained-md lg:px-constrained-lg"
      id="academy-support"
    >
      <Pattern className="absolute top-0 -right-32 transform rotate-12 opacity-40 md:right-0" />

      <h2 className="text-lg mb-7 md:text-xl md:mb-16">Pupils AP Academy Support</h2>

      <p className="max-w-prose mb-24 md:text-md md:mb-32">
        AP Academy along with BYT work with over 1,500 pupils each year with a range of needs. Here are just some of the
        needs we meet:
      </p>

      <dl className="grid grid-cols-1 gap-8 md:grid-cols-2 gap-x-8 gap-y-16 lg:grid-cols-3">
        <div>
          <StaticImage
            src="../../images/academy-support/alternative-provision-online-anxiety.png"
            alt=""
            className="block w-80 h-80 mb-16 border-8 border-white rounded-xl bg-white mx-auto md:mx-0"
            objectFit="contain"
            quality={100}
          />

          <dt className="font-semibold">Anxiety Disorders</dt>
          <dd>
            Can be a long-term school refusal by students. AP Academy’s online alternative provision fills the gap.
          </dd>
        </div>

        <div>
          <StaticImage
            src="../../images/academy-support/alternative-provision-online-behavioural-challenges.png"
            alt=""
            className="block w-80 h-80 mb-16 border-8 border-white rounded-xl bg-white mx-auto md:mx-0"
            objectFit="contain"
            quality={100}
          />

          <dt className="font-semibold">Behavioural challenges</dt>
          <dd>
            AP Academy woks with schools and local authorities providing exclude children learning solutions from day 1
            of exclusion. We work with PRUs, independent learning providers and location authorities from temporary to
            full time exclusion.
          </dd>
        </div>

        <div>
          <StaticImage
            src="../../images/academy-support/alternative-provision-online-refusers.png"
            alt=""
            className="block w-80 h-80 mb-16 border-8 border-white rounded-xl bg-white mx-auto md:mx-0"
            objectFit="contain"
            quality={100}
          />

          <dt className="font-semibold">School Refusers</dt>
          <dd>
            The Increasing number of pupils who refuse going into school for a wide range of reasons. Increasingly
            includes bullying victims and complex medical condition.
          </dd>
        </div>

        <div>
          <StaticImage
            src="../../images/academy-support/alternative-provision-online-medical-needs.png"
            alt=""
            className="block w-80 h-80 mb-16 border-8 border-white rounded-xl bg-white mx-auto md:mx-0"
            objectFit="contain"
            quality={100}
          />

          <dt className="font-semibold">Medical Needs</dt>
          <dd>
            Our flexibility is at our core. Providing short to long term learning delivery to ensure students continue
            their learning. In spite of any health issues and where they are.
          </dd>
        </div>

        <div>
          <StaticImage
            src="../../images/academy-support/alternative-provision-online-young.png"
            alt=""
            className="block w-80 h-80 mb-16 border-8 border-white rounded-xl bg-white mx-auto md:mx-0"
            objectFit="contain"
            quality={100}
          />

          <dt className="font-semibold">Young people in care</dt>
          <dd>
            AP Academy works with the virtual school provider throughout boroughs. Providing continuality at a time of
            often fast changing periods.
          </dd>
        </div>

        <div>
          <StaticImage
            src="../../images/academy-support/alternative-provision-online-teenage-mothers.png"
            alt=""
            className="block w-80 h-80 mb-16 border-8 border-white rounded-xl bg-white mx-auto md:mx-0"
            objectFit="contain"
            quality={100}
          />

          <dt className="font-semibold">Teenage Mothers</dt>
          <dd>We work at every stage of pregnancy and beyond as they begin parenthood.</dd>
        </div>
      </dl>
    </section>
  );
};

export default Support;
