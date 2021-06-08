import React from 'react';
import '@fontsource/poppins/600.css';
import '@fontsource/hind';
import '@fontsource/hind/600.css';
import { GlobalStyles } from './src/global.styles';

export const wrapRootElement = ({ element }) => (
  <>
    <GlobalStyles />

    {element}
  </>
);
