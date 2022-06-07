import styled from "styled-components";
import BoardItem from "./BoardItem";
import { Link } from "react-router-dom";

const BoardGridContainer = styled.div`
  display: grid;
  border-top: 1px solid #000;
  grid-template-columns: 0.5fr 2fr 0.5fr 1fr;
  grid-template-rows: repeat(1, 40px);
  line-height: 40px;
  &:nth-child(4) {
    text-overflow: ellipsis;
    overflow: hidden;
  }
  a {
    color: #000;
    text-decoration: none;
  }
`;

const BoardRow = ({ record, type }) => {
  if (record === undefined) {
    return;
  }
  const { num, subject, author, date } = record;
  return (
    <BoardGridContainer>
      <BoardItem>{num}</BoardItem>
      <BoardItem>
        {type !== "head" ? (
          <Link to={"/page/" + num}>{subject}</Link>
        ) : (
          <span>{subject}</span>
        )}
      </BoardItem>
      <BoardItem>{author}</BoardItem>
      <BoardItem>{date}</BoardItem>
    </BoardGridContainer>
  );
};
export default BoardRow;
