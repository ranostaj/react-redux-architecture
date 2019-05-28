import { setArticles } from "../action-creators/articles";
import axios from "axios";

export const loadArticles = () => async dispatch => {
  try {
    const { data } = await axios.get("/api/articles.json");
    dispatch(setArticles(data));
  } catch (e) {
    throw Error(e);
  }
};
