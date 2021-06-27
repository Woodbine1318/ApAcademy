exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query CreatePagesQuery {
      allContentfulBlogPost {
        totalCount
      }
    }
  `);

  const { totalCount } = data.allContentfulBlogPost;
  const postsPerPage = Number(process.env.GATSBY_POSTS_PER_PAGE);
  // We'll display a 7th "latest" post on the first page so we need to remove it from the
  // total count
  const totalPages = Math.ceil((totalCount - 1) / postsPerPage);

  Array.from({ length: totalPages }).forEach((_, i) => {
    const currentPage = i + 1;

    actions.createPage({
      path: currentPage === 1 ? '/blog' : `/blog/${currentPage}`,
      component: require.resolve(`./src/templates/paginated-blog.jsx`),
      context: {
        totalPages,
        currentPage,
        hasNextPage: currentPage < totalPages,
        hasPreviousPage: currentPage > 1,
        perPage: currentPage === 1 ? postsPerPage + 1 : postsPerPage,
        skip: currentPage === 1 ? 0 : 1 + i * postsPerPage,
      },
    });
  });
};
