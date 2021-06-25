import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const BlogPost = ({ featured, post }) => {
  return (
    <article
      dateTime={post.createdAt}
      className={`flex flex-col flex-nowrap items-center ${
        featured
          ? 'col-span-full bg-primary text-white p-8 rounded-3xl mb-8 lg:flex-row lg:justify-evenly lg:items-center lg:p-12'
          : ''
      }`}
    >
      <Link to={`/blog/${post.slug}`}>
        <GatsbyImage
          image={post.cover.gatsbyImageData}
          alt={post.cover.title || ''}
          className={`h-96 border-8 border-white rounded-2xl mb-16 ${
            featured ? 'md:mr-8 lg:max-w-xl lg:mb-0 lg:mr-32 xl:max-w-5xl' : ''
          }`}
        />
      </Link>

      <div className={`flex-1 flex flex-col flex-nowrap justify-between ${featured ? 'md:max-w-4xl' : ''}`}>
        {featured ? <p className="text-md font-semibold transform -rotate-2 mb-2">Latest!</p> : null}
        <h2 className={`text-lg mb-8 leading-snug md:text-xl ${featured ? 'lg:text-2xl' : ''}`}>
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>

        <p className={featured ? 'text-md' : ''}>{post.content.childMarkdownRemark.excerpt}</p>

        <div
          className={`flex-1 flex flex-row flex-nowrap justify-between items-end py-16 text-sm md:text-base ${
            featured ? 'text-base' : ''
          }`}
        >
          <p className="font-semibold italic">{post.displayCreatedAt}</p>

          <Link
            to={`/blog/${post.slug}`}
            className={`font-semibold underline ${featured ? 'text-white' : 'text-primary'}`}
          >
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
};

BlogPost.propTypes = {
  featured: PropTypes.bool,
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.shape({
      childMarkdownRemark: PropTypes.shape({
        excerpt: PropTypes.string.isRequired,
        html: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    cover: PropTypes.shape({
      title: PropTypes.string,
      gatsbyImageData: PropTypes.object.isRequired,
    }).isRequired,
    createdAt: PropTypes.string.isRequired,
    displayCreatedAt: PropTypes.string.isRequired,
  }).isRequired,
};

BlogPost.defaultProps = {
  featured: false,
};

export default BlogPost;
