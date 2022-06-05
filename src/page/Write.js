import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeInput, initForm, writeContent } from "../module/board";
const Write = () => {
  const dispatch = useDispatch();
  const board = useSelector(({ board }) => ({ board }));
  const [data, setData] = useState({
    author: "",
    subject: "",
    content: "",
  });
  const onChange = (e) => {
    dispatch(
      changeInput({ form: "write", key: e.target.name, value: e.target.value })
    );
  };
  const onClick = () => {
    console.log(data);
    dispatch(writeContent(data));
  };
  useEffect(() => {
    dispatch(initForm("write"));
  }, []);
  useEffect(() => {
    console.log(board);
  }, [board]);
  return (
    <>
      <p>
        <input type="text" name="author" onChange={onChange} />
      </p>
      <p>
        <input type="text" name="subject" onChange={onChange} />
      </p>
      <p>
        <textarea name="content" onChange={onChange} />
      </p>
      <p>
        <button onClick={onClick}>전송</button>
      </p>
    </>
  );
};

export default Write;
