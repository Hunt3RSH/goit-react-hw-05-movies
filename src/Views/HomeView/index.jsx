import { MoviesList } from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';
import { loadTrendingMovies } from 'Utills/Api/api';
import { Sections, Title } from './HomeView.styled';

const HomeView = () => {
  const [trendingMovies, setTrendigMovies] = useState([]);
  useEffect(() => {
    loadTrendingMovies().then(setTrendigMovies);
  }, []);
  return (
    <Sections>
      <Title>Trending today</Title>
      <MoviesList movies={trendingMovies} link={'movies/'}></MoviesList>
    </Sections>
  );
};

export default HomeView;
