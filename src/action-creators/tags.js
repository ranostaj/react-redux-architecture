import { SET_TAGS } from "../action-types/tags";

export const setTags = (tags = []) => ({
  type: SET_TAGS,
  payload: tags
});
