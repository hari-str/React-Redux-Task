import axios from "axios";

export const listPhotos = () => async (dispatch) => {
  try {
    dispatch({ type: "PHOTOS_REQUEST" });
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        // console.log(response);
        dispatch({ type: "PHOTOS_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: "PHOTOS_FAIL",
          payload: error.message,
        });
      });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "PHOTOS_FAIL",
      payload: error.message,
    });
  }
};
