import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import teamReducer from "../reducer/reducer";

const store = createStore(
  teamReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
