import styled from "styled-components";

const BoardGridItem = styled.div`
  text-align: center;
`;

const BoardItem = ({ children }) => {
  return <BoardGridItem>{children}</BoardGridItem>;
};
export default BoardItem;
