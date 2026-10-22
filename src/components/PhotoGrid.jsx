import React from 'react';
import PhotoCard from './PhotoCard';

const PhotoGrid = ({ photos, isFavorite, toggleFavorite }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          isFavorite={isFavorite(photo.id)}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
};

export default PhotoGrid;