import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, path }) => {
  return (
    <div className="bg-background min-h-screen max-w-full overflow-hidden">
      <Header path={path} />

      {children}

      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string,
};

Layout.defaultProps = {
  path: '/',
};

export default Layout;
