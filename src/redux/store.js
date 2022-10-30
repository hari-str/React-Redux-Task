// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import reducer from './reducer';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const store = createStore(
//   reducer,
//   {},
//   composeWithDevTools(
//     applyMiddleware(thunk)
//   )
// );

// store.subscribe(() => store.getState())

// export default store

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { postReducer } from "./Reducer/postReducer";
import { photosReducer } from "./Reducer/photosReducer";
import { loginReducer } from "./Reducer/userReducer";

const reducer = combineReducers({
  posts: postReducer,
  photos: photosReducer,
  userLogin: loginReducer,
});

// login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromLocalStorage },
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
