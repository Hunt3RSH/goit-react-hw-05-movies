import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { MoviesList } from 'components/MovieList/MovieList';
import { loadMovieOnSearch } from 'Utills/Api/api';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Sections } from 'Views/HomeView/HomeView.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const searchQuery = searchParams.get('search');

  useEffect(() => {
    const fetchMoviesBySearch = async () => {
      const data = await loadMovieOnSearch(searchQuery)
        .then(data => {
          if (data.length === 0) {
            toast.warn(`No result by "${searchQuery}." Try something else`);
          }
          return data;
        })
        .catch(error => console.log(error));
      setMovies(data);
    };
    if (searchQuery) {
      fetchMoviesBySearch();
    }
  }, [searchQuery]);

  const submitSearch = search => {
    if (search.trim('') === '') {
      toast.info('Enter your search data 💖');
      return;
    }
    setSearchParams({ search });
  };
  return (
    <Sections>
      <ToastContainer />
      <SearchBar onSubmit={submitSearch} />
      {movies && <MoviesList movies={movies} state={{ from: location }} />}
    </Sections>
  );
};
export default Movies;
