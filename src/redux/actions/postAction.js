import axios from "axios";

export const listPost = () => async (dispatch) => {
  try {
    dispatch({ type: "POST_REQUEST" });
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        // console.log(response);
        dispatch({ type: "POST_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: "POST_FAIL",
          payload: error.message,
        });
      });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "POST_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
