import { SET_TAGS } from "../action-types/tags";

const initialState = {
  tags: []
};
export const tagsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TAGS: {
      return { ...state, tags: payload };
    }
    default:
      return state;
  }
};
