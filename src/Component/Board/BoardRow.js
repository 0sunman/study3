import styled from "styled-components";
import BoardItem from "./BoardItem";

const BoardGridContainer = styled.div`
  display: grid;
  border-top: 1px solid #000;
  grid-template-columns: 0.5fr 2fr 0.5fr 0.5fr;
  grid-template-rows: repeat(4, 10px);
  line-height: 30px;
`;

const BoardRow = ({ record }) => {
  if (record === undefined) {
    return;
  }
  const { num, subject, author, date } = record;
  return (
    <BoardGridContainer>
      <BoardItem>{num}</BoardItem>
      <BoardItem>{subject}</BoardItem>
      <BoardItem>{author}</BoardItem>
      <BoardItem>{date}</BoardItem>
    </BoardGridContainer>
  );
};
export default BoardRow;
