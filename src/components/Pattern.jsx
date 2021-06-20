import React from 'react';

const Pattern = ({ size, className }) => {
  const items = Array.from({ length: size });

  return (
    <div className={`grid grid-cols-10 gap-2 justify-center items-center w-72 ${className}`}>
      {items.map((_, i) =>
        items.map((_, ni) => <span className="w-5 h-5 rounded-full bg-primary" key={`${i} ${ni}`} />),
      )}
    </div>
  );
};

Pattern.defaultProps = { size: 10, className: '' };

export default Pattern;
