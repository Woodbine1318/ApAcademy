import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { navigate } from 'gatsby';

const Pagination = ({ totalPages, currentPage, hasNextPage, hasPreviousPage, pathForPage }) => {
  const pages = Array.from({ length: totalPages });

  return (
    <nav className="flex flex-row flex-nowrap justify-center items-center py-16">
      <div className="flex flex-row flex-nowrap justify-center items-stretch w-full max-w-sm bg-white border-2 border-primary-200 rounded-xl">
        <Link
          to={pathForPage(currentPage - 1)}
          className={`flex-1 flex justify-center items-center py-3 ${
            hasPreviousPage ? '' : 'opacity-20 pointer-events-none cursor-not-allowed'
          }`}
        >
          Previous
        </Link>

        <select
          defaultValue={currentPage}
          onChange={({ target: { value } }) => navigate(pathForPage(Number(value)))}
          className="px-8 py-3 cursor-pointer border-l-2 border-primary-200 border-r-2 appearance-none"
        >
          {pages.map((_, i) => (
            <option value={i + 1} key={pathForPage(i)}>
              {i + 1}
            </option>
          ))}
        </select>

        <Link
          to={pathForPage(currentPage + 1)}
          className={`flex-1 flex justify-center items-center py-3 ${
            hasNextPage ? '' : 'opacity-20 pointer-events-none cursor-not-allowed'
          }`}
        >
          Next
        </Link>
      </div>
    </nav>
  );
};

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  hasNextPage: PropTypes.bool.isRequired,
  hasPreviousPage: PropTypes.bool.isRequired,
  pathForPage: PropTypes.func.isRequired,
};

export default Pagination;
