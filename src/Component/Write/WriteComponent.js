import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PageComponent from "../Page/PageComponent";
import Editor from "./Editor";

const SimpleInput = styled.input`
  width: 100%;
  height: 30px;
  font-size: 15px;
  padding: 0;
  border-width: 0;
`;
const SimpleTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  font-size: 15px;
  padding: 0;
  border-width: 0;
`;

const ButtonArea = styled.div`
  margin-top: 20px;
  text-align: center;
  button {
    width: 200px;
    height: 50px;
  }
`;
const SimpleInputComponent = ({ name, onChange }) => {
  return <SimpleInput type="text" name={name} onChange={onChange} />;
};

const WriteComponent = ({ onChange, onClick, onChangeField }) => {
  const author = <SimpleInputComponent name="author" onChange={onChange} />;
  const subject = <SimpleInputComponent name="subject" onChange={onChange} />;
  const content = <Editor onChangeField={onChangeField} />;

  const props = { author, subject, content };

  return (
    <>
      <PageComponent {...props} />
      <ButtonArea>
        <button onClick={onClick}>게시글 올리기</button>
      </ButtonArea>
    </>
  );
};
export default WriteComponent;
