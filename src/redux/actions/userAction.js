//login
export const login = (user) => async (dispatch) => {
  try {
    dispatch({ type: "USER_LOGIN", payload: { user } });
    localStorage.setItem("userInfo", JSON.stringify(user));
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};

//logout
export const logout = () => (dispatch) => {
  try {
    localStorage.removeItem("userInfo");
    dispatch({ type: "USER_LOGOUT" });
  } catch (error) {
    console.log(error);
  }
};
