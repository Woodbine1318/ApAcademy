import { useStaticQuery, graphql } from 'gatsby';

export const useContactInfo = () => {
  const {
    site: {
      siteMetadata: {
        contactInfo: { phone, email },
      },
    },
  } = useStaticQuery(graphql`
    query ContactInfoQuery {
      site {
        siteMetadata {
          contactInfo {
            phone
            email
          }
        }
      }
    }
  `);

  return { phone, email };
};
