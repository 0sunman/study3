import styled from "styled-components";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";

const ListGridContainer = styled.div`
  display: grid;
  line-height: 40px;
  border-top: 1px solid #000;
  grid-template-columns: 0.5fr 2fr 0.5fr 1fr;
  @media (max-width: 787px) {
    & > div:nth-child(1) {
      display: none;
    }
    grid-template-columns: 3fr 0.5fr 1fr;
  }
  grid-template-rows: repeat(1, 40px);
  & > div {
    text-overflow: ellipsis;
    text-align: center;
    overflow: hidden;
  }
  a {
    color: #000;
    text-decoration: none;
  }
`;

const ListRow = ({ record, type }) => {
  if (record === undefined) {
    return;
  }
  const { num, subject, author, date } = record;
  return (
    <ListGridContainer>
      <ListItem>{num}</ListItem>
      <ListItem>
        {type !== "head" ? (
          <Link to={"/page/" + num}>
            {subject === "" ? "[ 비어있음 ]" : subject}
          </Link>
        ) : (
          <span>{subject === "" ? "[ 비어있음 ]" : subject}</span>
        )}
      </ListItem>
      <ListItem>{author === "" ? "무명" : author}</ListItem>
      <ListItem>{date === "작성일" ? "작성일" : "개발중"}</ListItem>
    </ListGridContainer>
  );
};
export default ListRow;
