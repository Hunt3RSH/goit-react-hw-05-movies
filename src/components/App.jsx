import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { lazy } from 'react';

const HomeView = lazy(() => import('Views/HomeView/index'));
const Movies = lazy(() => import('Views/MoviesView/index'));
const MovieDetails = lazy(() => import('Views/MovieDetailsView/index'));
const Cast = lazy(() => import('Views/CastView/index'));
const Reviews = lazy(() => import('Views/ReviewsView/index'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<>Page not found</>} />
        </Route>
      </Routes>
    </>
  );
};
