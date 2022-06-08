import styled from "styled-components";
import MenuList from "./MenuList";
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(20%, auto));
`;
const GridItem = styled.div`
  height: 100px;
  @media (max-width: 787px) {
    height: 70px;
  }
  &: nth-child(2) {
    grid-column: 2/4;
    line-height: 100px;
    text-align: center;
  }
  @media (max-width: 787px) {
    &: nth-child(2) {
      line-height: 70px;
    }
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
