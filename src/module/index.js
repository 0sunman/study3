import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import board, { boardSaga } from "./board";
import user from "./user";
const reducer = combineReducers({ board,user });
export function* rootSaga() {
  yield all([boardSaga()]);
}

export default reducer;
