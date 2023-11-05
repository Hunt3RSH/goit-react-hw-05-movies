import PropTypes from 'prop-types';
import {
  Image,
  MovieCard,
  MovieList,
  MovieTitle,
  LinkStyle,
  MovieRating,
  VoteStyle,
  ImageWrapper,
} from './MovieList.styled';
import image from '../../Views/CastView/image.png';
const BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const MoviesList = ({ movies, link, state }) => {
  return (
    <MovieList>
      {movies.map(movie => {
        const { id, title, poster_path, vote_average } = movie;
        const poster = poster_path === null ? image : BASE_URL + poster_path;
        return link ? (
          <MovieCard key={id}>
            <LinkStyle to={`${link}${id}`} state={state}>
              <ImageWrapper>
                <Image src={poster} alt={title} />
                <MovieRating>
                  <VoteStyle vote={vote_average}>
                    {vote_average.toFixed(1)}
                  </VoteStyle>
                  /10
                </MovieRating>
              </ImageWrapper>
              <MovieTitle>{title}</MovieTitle>
            </LinkStyle>
          </MovieCard>
        ) : (
          <MovieCard key={id}>
            <LinkStyle to={`${id}`} state={state}>
              <ImageWrapper>
                <Image src={poster} alt={title} />
                <MovieRating>
                  <VoteStyle vote={vote_average}>
                    {vote_average.toFixed(1)}
                  </VoteStyle>
                  /10
                </MovieRating>
              </ImageWrapper>
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
