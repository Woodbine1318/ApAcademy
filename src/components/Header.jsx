import React from 'react';
import { Link } from 'gatsby';
import Logo from '../images/logo.svg';
import PhoneIcon from '../images/phone.svg';
import MailIcon from '../images/send.svg';
import { StaticImage } from 'gatsby-plugin-image';
import { PropTypes } from 'prop-types';
import { useContactInfo } from '../hooks/useContactInfo';

const Header = ({ path }) => {
  const { phone, email } = useContactInfo();

  return (
    <header className="relative px-constrained py-14 md:px-constrained-md lg:px-constrained-lg z-50">
      <nav className="flex flex-row flex-nowrap justify-between items-center md:items-start xl:items-center">
        <Link to="/" aria-label="Home" className="lg:mr-16">
          <Logo />
        </Link>

        <div className="flex flex-row flex-nowrap justify-end items-center md:hidden">
          <details className="relative mr-7">
            <summary className="relative font-display w-40 h-16 bg-button-shape bg-no-repeat bg-contain bg-center text-center cursor-pointer outline-none">
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Menu</span>
            </summary>

            <ul className="absolute top-full left-1/2 transform -translate-x-1/2 text-white font-display text-center py-12 px-16 my-8 w-max">
              <div className="absolute top-0 left-0 right-0 bottom-0">
                <StaticImage src="../images/dropdown-shape.svg" quality={100} objectFit="contain" />
              </div>

              <li className="relative mb-5">
                {path !== '/' ? (
                  <Link to="/#how-it-works">How it works</Link>
                ) : (
                  <a href="#how-it-works">How it works</a>
                )}
              </li>
              <li className="relative mb-5">
                {path !== '/' ? <Link to="/#experience">Experience</Link> : <a href="#experience">Experience</a>}
              </li>
              <li className="relative mb-5">
                {path !== '/' ? (
                  <Link to="/#academy-support">Academy Support</Link>
                ) : (
                  <a href="#academy-support">Academy Support</a>
                )}
              </li>
              <li className="relative ">
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </details>

          <details className="relative">
            <summary className="relative font-display w-40 h-16 bg-button-shape bg-no-repeat bg-contain bg-center text-center cursor-pointer outline-none">
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Contact</span>
            </summary>

            <ul className="absolute flex flex-col justify-evenly top-full right-0 text-white font-display text-center py-12 px-16 my-8 max-w-sm min-h-80">
              <div className="absolute top-0 left-0 right-0 bottom-0">
                <StaticImage src="../images/dropdown-shape.svg" quality={100} objectFit="contain" />
              </div>

              <li className="relative flex flex-row flex-nowrap items-center">
                <PhoneIcon className="hidden mr-7" />
                <a href={`tel:${phone}`}>{phone}</a>
              </li>
              <li className="relative flex flex-row flex-nowrap items-center ">
                <MailIcon className="hidden mr-7" />
                <a href={`mailto:${email}`} className="break-all">
                  {email}
                </a>
              </li>
            </ul>
          </details>
        </div>

        <div className="hidden md:flex flex-col items-end font-semibold xl:flex-row xl:justify-between xl:items-center md:flex-1">
          <ul className="order-1 flex flex-nowrap justify-end items-center xl:order-none lg:justify-start">
            <li className="mr-10">
              {path !== '/' ? <Link to="/#how-it-works">How it works</Link> : <a href="#how-it-works">How it works</a>}
            </li>
            <li className="mr-10">
              {path !== '/' ? <Link to="/#experience">Experience</Link> : <a href="#experience">Experience</a>}
            </li>
            <li className="mr-10">
              {path !== '/' ? (
                <Link to="/#academy-support">Academy Support</Link>
              ) : (
                <a href="#academy-support">Academy Support</a>
              )}
            </li>
            <li className="">
              <Link to="/blog">Blog</Link>
            </li>
          </ul>

          <ul className="flex flex-nowrap justify-end items-center mb-10 underline xl:mb-0">
            <li className="flex flex-row flex-nowrap items-center mr-10">
              <PhoneIcon className="mr-7" />
              <a href={`tel:${phone}`}>{phone}</a>
            </li>
            <li className="flex flex-row flex-nowrap items-center ">
              <MailIcon className="mr-7" />
              <a href={`mailto:${email}`}>{email}</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  path: PropTypes.string,
};

Header.defaultProps = {
  path: '/',
};

export default Header;
