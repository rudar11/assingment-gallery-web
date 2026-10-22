import React from 'react';

const EmptyState = ({ searchTerm }) => {
  return (
    <div className="text-center text-gray-500 mt-10">
      No photos found for "{searchTerm}".
    </div>
  );
};

export default EmptyState;