export const postReducer = (state = { post: [] }, action) => {
  switch (action.type) {
    case "POST_REQUEST": {
      return { loading: true, post: [] };
    }
    case "POST_SUCCESS": {
      return { loading: false, post: action.payload };
    }
    case "POST_FAIL": {
      return { loading: false, error: action.payload };
    }
    default:
      return state;
  }
};
