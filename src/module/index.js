import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import board, { boardSaga } from "./board";
const reducer = combineReducers({ board });
export function* rootSaga() {
  yield all([boardSaga()]);
}

export default reducer;
