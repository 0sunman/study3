import styled from "styled-components";
import { Link } from "react-router-dom";
const MenuAll = styled.div`
  @media (max-width: 787px) {
    overflow-x: scroll;
    white-space: nowrap;
    overflow-y: hidden;
  }

  text-align: center;
`;
const MenuElement = styled(Link)`
  display: inline-block;
  width: 200px;
  height: 50px;
  line-height: 50px;

  margin-left: 10px;
  &:first-child {
    margin-left: 0px;
  }
  text-align: center;
  border: 1px solid #000;
  text-decoration: none;
  color: #000000;

  @media (max-width: 787px) {
    width: 130px;
  }
`;

const MenuList = () => {
  return (
    <MenuAll>
      <MenuElement to="/">글목록</MenuElement>
      <MenuElement to="/write">글쓰기</MenuElement>
      <MenuElement to="/">로그인</MenuElement>
    </MenuAll>
  );
};

export default MenuList;
