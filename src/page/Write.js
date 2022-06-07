import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeInput, initForm, writeContent } from "../module/board";
import { useNavigate } from "react-router-dom";
const Write = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { board } = useSelector(({ board }) => ({
    board,
  }));
  const { errorWrite } = board;
  const [data, setData] = useState({
    author: "",
    subject: "",
    content: "",
  });
  const onChange = (e) => {
    try {
      setData({ ...data, [e.target.name]: e.target.value });
    } catch (err) {
      console.log(err);
    }
    /*
    dispatch(
      changeInput({ form: "write", key: e.target.name, value: e.target.value })
    );*/
  };
  const onClick = () => {
    console.log(data);
    try {
      dispatch(writeContent(data));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    dispatch(initForm("write"));
  }, [dispatch]);
  useEffect(() => {
    if (errorWrite === false) {
      console.log("성공");
      navigate("/");
    }
    if (errorWrite) {
      console.log(errorWrite);
    }
  }, [errorWrite]);
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
