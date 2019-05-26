import { SET_ARTICLES } from "../action-types/articles";

const initialState = {
  articles: []
};
export const articlesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ARTICLES: {
      return { ...state, articles: payload };
    }
    default:
      return state;
  }
};
