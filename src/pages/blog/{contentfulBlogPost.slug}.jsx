import React from 'react';
import Layout from '../../components/Layout';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as styles from '../../components/styles/RichContent.module.css';
import Pattern from '../../components/Pattern';

const BlogPostTemplate = ({ path, data: { contentfulBlogPost: post } }) => {
  return (
    <Layout path={path}>
      <main className="px-constrained pt-24 pb-16 md:px-constrained-md lg:px-constrained-lg">
        <h1 className="relative text-center text-xl md:text-2xl">
          <Pattern className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 rotate-12" />
          <span className="relative">{post.title}</span>
        </h1>
        <time dateTime={post.createdAt} className="block italic text-center mb-32">
          {post.displayCreatedAt}
        </time>

        <GatsbyImage
          image={post.cover.gatsbyImageData}
          alt={post.cover.title || ''}
          className="mb-32 max-w-screen-lg max-h-200 mx-auto border-8 border-white rounded-2xl"
        />

        <div
          dangerouslySetInnerHTML={{ __html: post.content.childMarkdownRemark.html }}
          className={`${styles.richContent} max-w-screen-lg mx-auto md:text-md`}
        />
      </main>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      slug
      title
      content {
        childMarkdownRemark {
          html
        }
      }
      cover {
        title
        gatsbyImageData(layout: FULL_WIDTH, quality: 100)
      }
      createdAt
      displayCreatedAt: createdAt(formatString: "MMMM Do, YYYY")
    }
  }
`;

export default BlogPostTemplate;
