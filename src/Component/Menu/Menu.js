import styled from "styled-components";
import MenuList from "./MenuList";
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(20%, auto));
`;
const GridItem = styled.div`
  height: 150px;

  &: nth-child(2) {
    grid-column: 2/4;
    line-height: 150px;
    text-align: center;
  }
  &: nth-child(4) {
    grid-column: 1/5;
    height: 50px;
  }
`;

const Menu = () => {
  return (
    <GridContainer>
      <GridItem></GridItem>
      <GridItem>Basic React Board</GridItem>
      <GridItem></GridItem>
      <GridItem>
        <MenuList />
      </GridItem>
    </GridContainer>
  );
};

export default Menu;
