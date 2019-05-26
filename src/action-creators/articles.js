import { SET_ARTICLES } from "../action-types/articles";

export const setArticles = (articles = []) => ({
  type: SET_ARTICLES,
  payload: articles
});
