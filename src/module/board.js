import { handleActions } from "redux-actions";
import { createAction } from "redux-actions";

const READ_LIST = "board/READ_LIST";
const WRITE_CONTENT = "board/WRITE_CONTENT";
const CHANGE_INPUT = "board/CHANGE_INPUT";
const INIT_FORM = "board/INIT_FORM";

export const readList = createAction(READ_LIST);
export const writeContent = createAction(
  WRITE_CONTENT,
  ({ author, subject, content }) => ({ author, subject, content })
);
export const changeInput = createAction(
  CHANGE_INPUT,
  ({ form, key, value }) => ({ form, key, value })
);
export const initForm = createAction(INIT_FORM, (form) => form);

const initState = {
  list: [
    {
      num: 1,
      subject: "다람쥐 헌 쳇바퀴 타고파",
      content: "1234",
      author: "홍길동",
      date: "2022-06-03",
    },
    {
      num: 2,
      subject: "다람쥐 헌 쳇바퀴 타고파",
      content: "1234",
      author: "홍길동",
      date: "2022-06-03",
    },
    {
      num: 3,
      subject: "다람쥐 헌 쳇바퀴 타고파",
      content: "1234",
      author: "홍길동",
      date: "2022-06-03",
    },
    {
      num: 4,
      subject: "다람쥐 헌 쳇바퀴 타고파",
      content: "1234",
      author: "홍길동",
      date: "2022-06-03",
    },
  ],
  write: {
    subject: "",
    content: "",
    author: "",
    date: "",
  },
};
let num = 4;
const board = handleActions(
  {
    [INIT_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initState[form],
    }),
    [WRITE_CONTENT]: (state, { payload: content }) => ({
      ...state,
      page: content,
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
  },
  initState
);
export default board;
