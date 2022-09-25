import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { lazy, Suspense } from 'react';
import { Blocks } from 'react-loader-spinner';
import NotFound from 'Views/404/404';

const HomeView = lazy(() => import('Views/HomeView/index'));
const Movies = lazy(() => import('Views/MoviesView/index'));
const MovieDetails = lazy(() => import('Views/MovieDetailsView/index'));
const Cast = lazy(() => import('Views/CastView/index'));
const Reviews = lazy(() => import('Views/ReviewsView/index'));

export const App = () => {
  return (
    <>
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
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeView />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
