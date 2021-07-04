import {
  ADD_FAVORITES,
  GET_FAVORITES,
  GET_MOVIES,
  REMOVE_FAVORITES,
  SET_DEFAULT_MOVIES,
} from '../types';

// eslint-disable-next-line import/no-anonymous-default-export
const movieReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_DEFAULT_MOVIES:
      return {
        ...state,
        movies: payload,
      };
    case GET_MOVIES:
      return { ...state, movies: payload };
    case ADD_FAVORITES: {
      const favMovie = state.movies.filter(movie => movie.id === payload);
      let allFav = [...favMovie];
      if (state.favorites !== null) {
        allFav.push(...state.favorites);
      }
      localStorage.setItem('fav-movies', JSON.stringify(allFav));
      return {
        ...state,
        favorites: allFav,
      };
    }
    case REMOVE_FAVORITES: {
      const favMovie = state.favorites.filter(movie => movie.id !== payload);
      const allFav = favMovie;
      localStorage.setItem('fav-movies', JSON.stringify(allFav));
      return {
        ...state,
        favorites: allFav,
      };
    }
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
