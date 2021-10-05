import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Sidebar from './Sidebar';
import '../styles/sidebar.css';
import MenuIcon from '../images/menu.svg';
import CloseIcon from '../images/close.svg';

const Layout = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="bg-background min-h-screen">
      <div className="flex">
        <div className="ml-5 flex flex-grow flex-nowrap items-center md:hidden z-20">
          {sidebar ? (
            <button onClick={() => setSidebar(false)}>
              <CloseIcon className="w-16" style={{ width: '40', height: '40' }} />
            </button>
          ) : (
            <button onClick={() => setSidebar(true)}>
              <MenuIcon style={{ width: '40', height: '40' }} />
            </button>
          )}
        </div>

        <Header />
      </div>

      {/* Sidebar */}
      <Sidebar change={sidebar} />

      <div>{children}</div>
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
