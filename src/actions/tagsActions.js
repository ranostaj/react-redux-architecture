import { setTags } from "../action-creators/tags";
import axios from "axios";

export const loadTagsAction = () => async dispatch => {
  try {
    const { data } = await axios.get("/api/tags.json");
    dispatch(setTags(data));
  } catch (e) {
    throw Error(e);
  }
};
