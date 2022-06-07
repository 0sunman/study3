import styled from "styled-components";

const MenuAll = styled.div`
  text-align: center;
`;
const MenuElement = styled.a`
  display: inline-block;
  width: 200px;
  height: 50px;
  margin-left: 10px;
  &:first-child {
    margin-left: 0px;
  }
  line-height: 50px;
  text-align: center;
  border: 1px solid #000;
  text-decoration: none;
  color: #000000;
`;

const MenuList = () => {
  return (
    <MenuAll>
      <MenuElement href="/">글목록</MenuElement>
      <MenuElement href="/write">글쓰기</MenuElement>
      <MenuElement href="#">로그인</MenuElement>
    </MenuAll>
  );
};

export default MenuList;
