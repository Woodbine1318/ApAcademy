import React from 'react';
import Logo from '../images/logo.svg';
import PhoneIcon from '../images/phone.svg';
import MailIcon from '../images/send.svg';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { useContactInfo } from '../hooks/useContactInfo';

const Footer = () => {
  const { phone, email } = useContactInfo();
  const { footer } = useStaticQuery(graphql`
    query FooterQuery {
      footer: contentfulNavigationBar(name: { eq: "Footer" }) {
        links {
          id
          text
          entry {
            id
            title
            slug
          }
        }
      }
    }
  `);

  console.log(footer);

  return (
    <footer className="bg-primary-200 pt-16 pb-4 px-constrained md:px-constrained-md md:pb-16 lg:px-constrained-lg">
      <div className="md:flex flex-row flex-nowrap justify-between items-end md:mb-12">
        <div>
          <Link to="/" aria-label="Home" className="block mb-12">
            <Logo />
          </Link>

          <nav className="mb-28 md:mb-0">
            <ul>
              {footer.links.map((link) => (
                <li className="font-semibold text-md" key={link.id}>
                  <Link to={`/blog/${link.entry?.slug}`}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col items-end mb-8 md:mb-0">
          <a href={`tel:${phone}`} className="flex flex-nowrap items-center mb-7 md:mb-0">
            <PhoneIcon className="mr-6" />
            <span className="underline">{phone}</span>
          </a>

          <a href={`mailto:${email}`} className="flex flex-nowrap items-center">
            <MailIcon className="mr-6" />
            <span className="underline">{email}</span>
          </a>
        </div>
      </div>

      <small className="block text-right border-t border-primary-100 pt-8">
        AP Academy &copy; {new Date().getFullYear()}
      </small>
    </footer>
  );
};

export default Footer;
