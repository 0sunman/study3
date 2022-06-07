import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { initForm, readList } from "../../module/board";
import BoardRow from "./BoardRow";
const BoardWrap = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  max-width: 1000px;
`;
const BoardHeader = styled.div`
  div {
    font-weight: bold;
  }
`;
const BoardBody = styled.div``;
const BoardFooter = styled.div``;

const Board = () => {
  const record = useSelector(({ board }) => [...board.list]);
  const board = useSelector(({board})=>(board))
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initForm("list"))
    dispatch(readList());
  }, [dispatch]);
  useEffect(()=>{
    console.log(board);
  },[board])
  return (
    <BoardWrap>
      <BoardHeader>
        <BoardRow
          record={{
            num: "번호",
            subject: "제목",
            author: "작성자",
            date: "작성일",
          }}
          type="head"
        ></BoardRow>
      </BoardHeader>
      <BoardBody>
        {record &&
          record.length > 0 &&
          record.map((recordData, idx) => {
            return <BoardRow key={idx} record={recordData}></BoardRow>;
          })}
      </BoardBody>
      <BoardFooter></BoardFooter>
    </BoardWrap>
  );
};

export default Board;
