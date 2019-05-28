import { combineReducers } from "redux";
import { articlesReducer } from "./articlesReducer";
import { tagsReducer } from "./tagsReducer";

export default combineReducers({
  articles: articlesReducer,
  tags: tagsReducer
});
