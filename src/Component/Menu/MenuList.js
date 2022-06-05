import styled from "styled-components";

const MenuAll = styled.div`
  text-align: center;
`;
const MenuElement = styled.div`
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
`;

const MenuList = () => {
  return (
    <MenuAll>
      <MenuElement>로그인</MenuElement>
      <MenuElement>글 목록</MenuElement>
      <MenuElement>글 읽기</MenuElement>
    </MenuAll>
  );
};

export default MenuList;
