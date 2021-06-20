import React from 'react';
import MaskShape from '../images/callout-shape.svg';

const Callout = ({ children }) => (
  <section className="text-white font-semibold text-center tex-lg px-constrained md:px-constrained-md lg:px-constrained-lg lg:text-xl">
    <div className="relative py-24">
      <MaskShape className="absolute top-0 left-0 w-full h-full" />

      <div className="relative max-w-prose mx-auto px-14 lg:px-32">{children}</div>
    </div>
  </section>
);

export default Callout;
