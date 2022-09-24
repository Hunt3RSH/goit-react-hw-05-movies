import { Suspense, useEffect, useState } from 'react';
import { Blocks } from 'react-loader-spinner';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { loadFullInfoMovie } from 'Utills/Api/api';
import { Sections } from 'Views/HomeView/HomeView.styled';
import {
  ButtonLink,
  DetaisWrapper,
  Img,
  InfoWrapper,
  MovieWrapper,
  SectionWrapper,
} from './MovieDetailsView.styled';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const location = useLocation();
  const backLink = location?.state?.from ?? '/';

  useEffect(() => {
    loadFullInfoMovie(movieId).then(setMovieInfo);
  }, [movieId]);

  if (Object.keys(movieInfo).length === 0) {
    return null;
  }

  const { vote_average, title, overview, genres, poster_path, release_date } =
    movieInfo;
  const posterLink = BASE_URL + poster_path;
  const userScore = parseInt(vote_average * 10);
  const genresInfo = genres.map(a => a.name).join(', ');
  const releaseYear = release_date.split('-')[0];

  return (
    <InfoWrapper>
      <Sections>
        <SectionWrapper>
          <ButtonLink to={backLink}>Go Back</ButtonLink>
          <MovieWrapper>
            <Img src={posterLink} alt={`${title} poster`} />
            <div>
              <DetaisWrapper>
                <h2>
                  {title} ({releaseYear})
                </h2>
                <p>User Score: {userScore}%</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <p>{genresInfo}</p>
              </DetaisWrapper>
            </div>
          </MovieWrapper>
        </SectionWrapper>
      </Sections>
      {/* <Sections>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to="cast" state={location.state}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={location.state}>
              Reviews
            </Link>
          </li>
        </ul>
      </Sections> */}
      <Suspense
        fallback={
          <Blocks
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="loaderStyle"
          />
        }
      >
        <Outlet />
      </Suspense>
    </InfoWrapper>
  );
};
export default MovieDetails;
