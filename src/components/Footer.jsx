import React from 'react';
import Logo from '../images/logo.svg';
import PhoneIcon from '../images/phone.svg';
import MailIcon from '../images/send.svg';
import { Link } from 'gatsby';
import { useContactInfo } from '../hooks/useContactInfo';

const Footer = () => {
  const { phone, email } = useContactInfo();

  return (
    <footer className="flex flex-col bg-primary-200 pt-16 pb-4 px-constrained md:flex-row md:items-center md:justify-between md:px-constrained-md md:pb-16 lg:px-constrained-lg">
      <Link to="/" aria-label="Home" className="block mb-12 md:mb-0">
        <Logo />
      </Link>

      <div className="flex flex-col md:flex-row mb-20 md:mb-0">
        <a href={`tel:${phone}`} className="flex flex-nowrap items-center mb-7 md:mb-0 md:mr-16">
          <PhoneIcon className="mr-6" />
          <span className="underline">{phone}</span>
        </a>
        <a href={`mailto:${email}`} className="flex flex-nowrap items-center">
          <MailIcon className="mr-6" />
          <span className="underline">{email}</span>
        </a>
      </div>

      <small className="block text-right">AP Academy &copy; {new Date().getFullYear()}</small>
    </footer>
  );
};

export default Footer;
