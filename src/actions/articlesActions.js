import { setArticles } from "../action-creators/articles";

export const loadArticles = () => dispatch => {
  dispatch(setArticles());
};
