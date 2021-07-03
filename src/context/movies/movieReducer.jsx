import { GET_MOVIES } from '../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, { type, payload }) => {
  switch (type) {
    case GET_MOVIES:
      return { ...state, ...payload };

    default:
      return state;
  }
};
