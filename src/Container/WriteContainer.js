import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { writeContent, initForm } from "../module/board";

import WriteComponent from "../Component/Write/WriteComponent";
const WriteContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { errorWrite, isLoading } = useSelector(({ board }) => board);
  const [writeData, setwriteData] = useState({
    author: "",
    subject: "",
    content: "",
  });
  const [content, setContent] = useState("");
  const onChange = (e) => {
    try {
      setwriteData({ ...writeData, [e.target.name]: e.target.value });
      console.log(writeData);
    } catch (err) {
      console.log(err);
    }
  };
  const onChangeField = ({ value }) => {
    setContent(value);
  };
  const onClick = () => {
    try {
      dispatch(writeContent(writeData));
    } catch (err) {
      console.log(err);
    }
  };
  const props = { onClick, onChange, onChangeField, isLoading };

  useEffect(() => {
    setwriteData({ ...writeData, content });
    console.log(writeData);
  }, [content]);

  useEffect(() => {
    dispatch(initForm("write"));
  }, [dispatch]);

  useEffect(() => {
    if (errorWrite === false) {
      navigate("/");
    }
    if (errorWrite) {
      console.log(errorWrite);
    }
  }, [errorWrite, navigate]);

  return <WriteComponent type="write" {...props}></WriteComponent>;
};
export default WriteContainer;
