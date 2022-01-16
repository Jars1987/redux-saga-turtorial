const jokeReducer = (state = {}, action) => {
  switch (action.type) {
    case 'set_joke': {
      const newJoke = action.payload;
      return { ...state, ...newJoke };
    }

    default:
      return state;
  }
};

export default jokeReducer;
