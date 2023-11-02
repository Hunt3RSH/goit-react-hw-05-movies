import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '40875a7f166b061faf5f77ac964541b9';

export const loadTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  const trendingMovies = response.data.results.map(movie => {
    const { id, title, poster_path, vote_average } = movie;
    return {
      id,
      title,
      poster_path,
      vote_average,
    };
  });
  return trendingMovies;
};

export const loadFullInfoMovie = async id => {
  const response = await axios.get(`movie/${id}?api_key=${API_KEY}`);

  const { vote_average, title, overview, genres, poster_path, release_date } =
    response.data;

  return {
    vote_average,
    title,
    overview,
    genres,
    poster_path,
    release_date,
  };
};

export const loadCastInfoMovie = async id => {
  const response = await axios.get(
    `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );

  const castInfo = response.data.cast.map(el => {
    const { name, character, profile_path, id } = el;
    return {
      name,
      character,
      profile_path,
      id,
    };
  });

  return castInfo;
};

export const loadReviewsMovie = async id => {
  const response = await axios.get(
    `movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  const reviews = response.data.results.map(el => {
    const { id, author, content, author_details } = el;
    return {
      id,
      author,
      content,
      author_details,
    };
  });

  return reviews;
};

export const loadMovieOnSearch = searchQuery => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${searchQuery}`
  )
    .then(response => response.json())
    .then(data => {
      const movieList = data.results.map(el => {
        const { id, title, poster_path, vote_average } = el;
        return {
          id,
          title,
          poster_path,
          vote_average,
        };
      });

      return movieList;
    });
};
