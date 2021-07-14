import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as styles from '../components/styles/RichContent.module.css';
import Pattern from '../components/Pattern';
import SEO from '../components/SEO';

const Page = ({ location: { pathname }, data: { contentfulPage: page } }) => {
  return (
    <Layout path={pathname}>
      <SEO title={page.title} description={page.content.childMarkdownRemark.excerpt} canonicalPath={pathname} />

      <main className="px-constrained pt-24 pb-16 md:px-constrained-md lg:px-constrained-lg">
        <h1 className="relative text-center text-xl mb-32 md:text-2xl">
          <Pattern className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 rotate-12" />
          <span className="relative">{page.title}</span>
        </h1>

        {page.cover && (
          <GatsbyImage
            image={page.cover.gatsbyImageData}
            alt={page.cover.title || ''}
            className="mb-32 max-w-screen-lg max-h-200 mx-auto border-8 border-white rounded-2xl"
          />
        )}

        <div
          dangerouslySetInnerHTML={{ __html: page.content.childMarkdownRemark.html }}
          className={`${styles.richContent} max-w-screen-lg mx-auto md:text-md`}
        />
      </main>
    </Layout>
  );
};

export const query = graphql`
  query PageQuery($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      id
      slug
      title
      content {
        childMarkdownRemark {
          excerpt(format: PLAIN, truncate: false)
          html
        }
      }
      cover {
        title
        gatsbyImageData(layout: FULL_WIDTH, quality: 100)
      }
    }
  }
`;

export default Page;
