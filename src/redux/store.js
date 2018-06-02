import { createStore, applyMiddleware } from "redux";
import reduxArray from "redux-array";

import rootReducer, { DEFAULT_APP_STATE } from "./reducers";

let enhancer = applyMiddleware(reduxArray);

export const store = createStore(rootReducer, DEFAULT_APP_STATE, enhancer);
