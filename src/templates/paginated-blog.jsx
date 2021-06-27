import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import Pattern from '../components/Pattern';
import BlogPost from '../components/BlogPost';
import Pagination from '../components/Pagination';
import SEO from '../components/SEO';

const PaginatedBlog = ({
  location: { pathname },
  pageContext: { totalPages, currentPage, hasNextPage, hasPreviousPage },
  data: {
    allContentfulBlogPost: { edges: posts },
  },
}) => {
  return (
    <Layout path={pathname}>
      <SEO title="Blog" canonicalPath={pathname} />

      <section className="px-constrained pt-36 md:px-constrained-md lg:px-constrained-lg">
        <h1 className="relative text-center text-xl max-w-5xl mx-auto mb-20 md:text-2xl">
          <Pattern className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20" />
          <span className="relative">
            Welcome to the AP Academy blog, keep up to date with news and resources for alternative provision online
          </span>
        </h1>

        <div className="grid grid-cols-1 gap-8 items-stretch py-32 md:grid-cols-2 md:gap-16 lg:grid-cols-3">
          {posts.map(({ node: post }, index) => (
            <BlogPost featured={currentPage === 1 && index === 0} post={post} key={post.id} />
          ))}
        </div>

        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          hasNextPage={hasNextPage}
          hasPreviousPage={hasPreviousPage}
          pathForPage={(page) => (page === 1 ? '/blog' : `/blog/${page}`)}
        />
      </section>
    </Layout>
  );
};

export const query = graphql`
  query PaginatedBlogQuery($perPage: Int!, $skip: Int!) {
    allContentfulBlogPost(sort: { fields: createdAt, order: DESC }, limit: $perPage, skip: $skip) {
      edges {
        node {
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
            gatsbyImageData(layout: CONSTRAINED, width: 800, quality: 100)
          }
          createdAt
          displayCreatedAt: createdAt(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
`;

export default PaginatedBlog;
