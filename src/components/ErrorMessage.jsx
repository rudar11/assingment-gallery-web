import React from 'react';

const ErrorMessage = ({ error }) => {
  return (
    <div className="text-center text-red-500 font-semibold mt-4">
      Failed to fetch photos: {error}
    </div>
  );
};
export default ErrorMessage;