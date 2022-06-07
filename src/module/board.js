import { handleActions } from "redux-actions";
import { createAction } from "redux-actions";
import { call, put, takeLatest } from "redux-saga/effects";
import * as api from "../api/client.js";

const READ_CONTENT = "board/READ_CONTENT";
const READ_LIST = "board/READ_LIST";
const READ_LIST_SUCCESS = "board/READ_LIST_SUCCESS";
const READ_LIST_FAILURE = "board/READ_LIST_FAILURE";
const READ_CONTENT_SUCCESS = "board/READ_CONTENT_SUCCESS";
const READ_CONTENT_FAILURE = "board/READ_CONTENT_FAILURE";

const WRITE_CONTENT = "board/WRITE_CONTENT";
const WRITE_CONTENT_SUCCESS = "board/WRITE_CONTENT_SUCCESS";
const WRITE_CONTENT_FAILURE = "board/WRITE_CONTENT_FAILURE";
const CHANGE_INPUT = "board/CHANGE_INPUT";
const INIT_FORM = "board/INIT_FORM";

export const readContent = createAction(READ_CONTENT, (id) => id);
function* readConentSaga(action) {
  try {
    const response = yield call(api.getContent, action.payload);
    yield put({
      type: READ_CONTENT_SUCCESS,
      payload: response.data.page[0],
    });
  } catch (e) {
    yield put({
      type: READ_CONTENT_FAILURE,
      payload: e,
    });
  }
}

export const readList = createAction(READ_LIST);
function* readListSaga() {
  try {
    const response = yield call(api.getList);
    yield put({
      type: READ_LIST_SUCCESS,
      payload: { list: response.data.result },
    });
  } catch (e) {
    yield put({
      type: READ_LIST_FAILURE,
      payload: e,
    });
  }
}
export const writeContent = createAction(
  WRITE_CONTENT,
  ({ author, subject, content }) => ({ author, subject, content })
);
function* writeContentSaga(action) {
  try {
    const response = yield call(api.writePost, action.payload);
    yield put({
      type: WRITE_CONTENT_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    yield put({
      type: WRITE_CONTENT_FAILURE,
      payload: e,
    });
  }
}
export const changeInput = createAction(
  CHANGE_INPUT,
  ({ form, key, value }) => ({ form, key, value })
);
export const initForm = createAction(INIT_FORM, (form) => form);

export function* boardSaga() {
  yield takeLatest(READ_LIST, readListSaga);
  yield takeLatest(READ_CONTENT, readConentSaga);
  yield takeLatest(WRITE_CONTENT, writeContentSaga);
}

const initState = {
  list: [],
  write: {
    subject: "",
    content: "",
    author: "",
    date: "",
  },
  content: {
    subject: "",
    content: "",
    author: "",
    date: "",
  },
  errorList: null,
  errorWrite: null,
  errorContent: null,
};

const board = handleActions(
  {
    [INIT_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initState[form],
      errorList: null,
      errorWrite: null,
      errorContent: null,
    }),
    [WRITE_CONTENT]: (state, { payload: write }) => ({
      ...state,
      write: write,
    }),

    [CHANGE_INPUT]: (state, { payload: { form, key, value } }) => {
      return {
        ...state,
        [form]: {
          ...state[form],
          [key]: value,
        },
      };
    },
    [READ_CONTENT_SUCCESS]: (state, { payload: content }) => ({
      ...state,
      content: content,
      errorContent: false,
    }),
    [READ_CONTENT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      errorContent: error,
    }),
    [READ_LIST_SUCCESS]: (state, { payload: { list } }) => ({
      ...state,
      list: list,
    }),
    [READ_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      errorList: error,
    }),

    [WRITE_CONTENT_SUCCESS]: (state, { payload: write }) => ({
      ...state,
      errorWrite: false,
    }),
    [WRITE_CONTENT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      errorWrite: error,
    }),
  },
  initState
);
export default board;
