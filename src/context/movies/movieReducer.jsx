import {
  ADD_FAVORITES,
  GET_FAVORITES,
  GET_MOVIES,
  GET_SEARCH_STRING,
  REMOVE_FAVORITES,
  REMOVE_MOVIES,
  SET_DEFAULT_MOVIES,
  SET_MODAL_DATA,
} from '../types';

// eslint-disable-next-line import/no-anonymous-default-export
const movieReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_DEFAULT_MOVIES:
      return { ...state, popular: payload };
    case GET_MOVIES:
      return { ...state, movies: payload };
    case REMOVE_MOVIES:
      return { ...state, movies: null };
    case GET_SEARCH_STRING:
      return { ...state, searchString: payload };
    case SET_MODAL_DATA:
      return { ...state, modalData: payload };
    case ADD_FAVORITES: {
      let movieArray = state.movies || state.popular;
      let favMovie = movieArray.filter(movie => movie.id === payload);
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
