import PropTypes from 'prop-types';
import {
  Image,
  MovieCard,
  MovieList,
  MovieTitle,
  LinkStyle,
} from './MovieList.styled';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const MoviesList = ({ movies, link, state }) => {
  return (
    <MovieList>
      {movies.map(movie => {
        const { id, title, poster_path } = movie;
        const poster = BASE_URL + poster_path;
        return link ? (
          <MovieCard key={id}>
            <LinkStyle to={`${link}${id}`} state={state}>
              <Image src={poster} alt={title} />
              <MovieTitle>{title}</MovieTitle>
            </LinkStyle>
          </MovieCard>
        ) : (
          <MovieCard key={id}>
            <LinkStyle to={`${id}`} state={state}>
              <Image src={poster} alt={title} />
              <MovieTitle>{title}</MovieTitle>
            </LinkStyle>
          </MovieCard>
        );
      })}
    </MovieList>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  link: PropTypes.string,
  state: PropTypes.object,
};
