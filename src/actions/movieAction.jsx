import axios from 'axios';
import {
  ADD_FAVORITES,
  GET_FAVORITES,
  GET_MOVIES,
  GET_SEARCH_STRING,
  REMOVE_FAVORITES,
  REMOVE_MOVIES,
  SET_DEFAULT_MOVIES,
  SET_MODAL_DATA,
} from './types';

const api_key = `04c35731a5ee918f014970082a0088b1`; // TMDB
const tmdb_url = `https://api.themoviedb.org/3`; // TMDB

// Get Default movies
export const getDefaultMovies = async dispatch => {
  try {
    const response = await axios.get(`${tmdb_url}/movie/popular`, {
      params: { api_key, language: 'en-US', page: '1' },
    });
    const { results } = response.data;
    dispatch({
      type: SET_DEFAULT_MOVIES,
      payload: results,
    });
  } catch (err) {
    console.log(err);
  }
};

// Get movies based on search
export const getMovies = string => async dispatch => {
  try {
    if (!string.trim().length) {
      setSearchString(null);
      removeMovies();
      return;
    }
    setSearchString(string);
    const response = await axios.get(`${tmdb_url}/search/movie`, {
      params: { sort_by: 'created_at.asc', query: string, api_key },
    });

    const { results } = response.data;

    dispatch({
      type: GET_MOVIES,
      payload: results,
    });
  } catch (err) {
    console.log(err);
  }
};

const setSearchString = string => async dispatch => {
  dispatch({
    type: GET_SEARCH_STRING,
    payload: string,
  });
};

// Remove movies from state
const removeMovies = async dispatch => {
  dispatch({
    type: REMOVE_MOVIES,
  });
};
