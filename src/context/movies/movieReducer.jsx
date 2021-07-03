import { ADD_FAVORITES, GET_FAVORITES, GET_MOVIES } from '../types';

// eslint-disable-next-line import/no-anonymous-default-export
const movieReducer = (state, { type, payload }) => {
  console.log(state, type, payload);
  switch (type) {
    case GET_MOVIES:
      return { ...state, ...payload };
    case ADD_FAVORITES:
      const favMovie = state.movies.filter(movie => movie.imdbID === payload);
      const allFav = [...favMovie, ...state.favorites];
      localStorage.setItem('fav-movies', JSON.stringify(allFav));
      return {
        ...state,
        favorites: allFav,
      };
    case GET_FAVORITES:
      let favMovies = JSON.parse(localStorage.getItem('fav-movies'));
      return {
        ...state,
        favorites: favMovies,
      };

    default:
      return state;
  }
};

export default movieReducer;
