import React from 'react';

const PhotoCard = ({ photo, isFavorite, toggleFavorite }) => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-md transition-shadow overflow-hidden flex flex-col">
      <img
        src={photo.download_url}
        alt={`By ${photo.author}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex justify-between items-center mt-auto">
        <span className="font-medium text-gray-700 truncate pr-2">
          {photo.author}
        </span>
        <button
          onClick={() => toggleFavorite(photo)}
          className="focus:outline-none transition-transform active:scale-90"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={isFavorite ? "#ef4444" : "none"}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={isFavorite ? "#b64141" : "currentColor"}
            className="w-7 h-7 text-gray-400 hover:text-red-500 transition-colors"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PhotoCard;