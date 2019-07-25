import { createStore, applyMiddleware } from "redux";
import thunk from "thunk";
import { reducer } from "./reducers";

export const store = createStore(reducer, applyMiddleware(thunk));
