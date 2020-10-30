const initialState = {
  content: [],
  movie: {},
  favs: [],
  user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "MOVIES":
      return { ...state, content: action.movies };
    case "ADD_MOVIES":
      return { ...state, content: state.content.concat(action.movies) };
    case "MOVIE":
      return { ...state, movie: action.movie };

    case "USER":
      return { ...state, user: action.user };
    case "FAVS":
      return { ...state, favs: action.movies };
  }

  return state;
};
