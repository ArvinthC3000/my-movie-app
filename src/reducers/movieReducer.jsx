const initialState = {
  popular: [],
  movies: null,
  favorites: [],
  searchString: null,
  modalData: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    // case typeName:
    //     return { ...state, ...payload }

    default:
      return state;
  }
};
