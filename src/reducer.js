export const initialState = {
  watchedHistory: [],
  searchOutput: [],
  iframe: "",
};

export const actionType = {
  SET_SEARCH: "SET_SEARCH",
  SET_VIDEO: "SET_VIDEO",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_SEARCH:
      return {
        ...state,
        searchOutput: action.searchOutput,
      };

    case actionType.SET_VIDEO:
      return {
        ...state,
        iframe: action.iframe,
        watchedHistory: [...state.watchedHistory, action.watched],
      };

    default:
      return state;
  }
};

export default reducer;
