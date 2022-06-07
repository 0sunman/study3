import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { initForm } from "../module/board";
import { readContent } from "../module/board";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const PageWrapper = styled.div`
  display: block;
  margin: 0 auto;
  margin-top: 70px;
  text-align: center;
  width: 50%;
  & > div {
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    grid-template-rows: 1fr;
    border: 1px solid #000;
    align-items: center;
  }
  div > div {
    min-height: 30px;
  }
  div > div:nth-child(n + 1) {
    border: 0px;
  }
  div > div:nth-child(2n) {
    border-left: 1px solid #000;
  }
  div:nth-child(n + 2) {
    border-top: 0px;
  }

  div:nth-child(3) > div {
    grid-column: 1/3;
    grid-template-columns: 1fr;
    min-height: 100px;
    margin: 10px;
    text-align: left;
  }
`;
/*
const Subject = h2``;
const Content = p``;
const author = p``;
*/

const Page = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const board = useSelector((board) => board);
  const { subject, content, author } = board.board.content;
  useEffect(() => {
    dispatch(initForm("page"));
    const paramsLength = location.pathname.split("/").length;
    const param = location.pathname.split("/")[paramsLength - 1];
    dispatch(initForm("page"));
    dispatch(readContent(param));
  }, [dispatch,location]);
  return (
    <PageWrapper>
      <div>
        <div>제목</div>
        <div>{subject}</div>
      </div>
      <div>
        <div>작성자</div>
        <div>{author}</div>
      </div>
      <div>
        <div>{content}</div>
      </div>
    </PageWrapper>
  );
};

export default Page;
