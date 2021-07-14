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
          __typename
          ... on ContentfulLink {
            id
            text
            url
            entry {
              id
              title
              slug
            }
          }

          ... on ContentfulPage {
            id
            title
            slug
          }
        }
      }
    }
  `);

  return (
    <footer className="bg-primary-200 pt-16 pb-4 px-constrained md:px-constrained-md md:pb-16 lg:px-constrained-lg">
      <div className="md:flex flex-row flex-nowrap justify-between md:mb-12">
        <div>
          <Link to="/" aria-label="Home" className="block mb-12">
            <Logo />
          </Link>

          <div className="flex flex-col mb-16 md:mb-0">
            <a href={`tel:${phone}`} className="flex flex-nowrap items-center mb-7">
              <PhoneIcon className="mr-6" />
              <span className="underline">{phone}</span>
            </a>

            <a href={`mailto:${email}`} className="flex flex-nowrap items-center">
              <MailIcon className="mr-6" />
              <span className="underline">{email}</span>
            </a>
          </div>
        </div>

        <nav className="mb-12 md:mb-0">
          <ul>
            {footer.links.map((link) =>
              link.__typename === 'ContentfulLink' ? (
                <li className="text-md" key={link.id}>
                  <Link to={link.url ?? `/blog/${link.entry?.slug}`}>{link.text}</Link>
                </li>
              ) : (
                <li className="text-md" key={link.id}>
                  <Link to={`/${link.slug}`}>{link.title}</Link>
                </li>
              ),
            )}
          </ul>
        </nav>
      </div>

      <small className="block text-right border-t border-primary-100 pt-8">
        AP Academy &copy; {new Date().getFullYear()}
      </small>
    </footer>
  );
};

export default Footer;
