import { useState, useReducer, useCallback, useMemo } from 'react';
import useFetchPhotos from './hooks/useFetchPhotos.js';
import { favoritesReducer, initialFavoritesState } from './reducers/favoritesReducer';
import SearchBar from './components/SearchBar';
import PhotoGrid from './components/PhotoGrid';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import EmptyState from './components/EmptyState';

function App() {
  const { photos, loading, error } = useFetchPhotos();
  const [favorites, dispatch] = useReducer(favoritesReducer, initialFavoritesState);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [photos, searchTerm]);

  const toggleFavorite = (photo) => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: photo });
  };

  const isFavorite = (id) => favorites.some((fav) => fav.id === id);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Search Bar */}
        <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />

        {/* Loading */}
        {loading && <Loader />}

        {/* Error */}
        {error && <ErrorMessage error={error} />}

        {/* Photo Grid */}
        {!loading && !error && (
          <PhotoGrid
            photos={filteredPhotos}
            isFavorite={isFavorite}
            toggleFavorite={toggleFavorite}
          />
        )}
        
        {/* Empty State */}
        {!loading && !error && filteredPhotos.length === 0 && (
          <EmptyState searchTerm={searchTerm} />
        )}

      </div>
    </div>
  );
}

export default App;