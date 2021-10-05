import { useStaticQuery, graphql } from 'gatsby';

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query HeaderQuery {
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
  return site.siteMetadata.contactInfo;
};
