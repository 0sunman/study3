import styled from "styled-components";
import Menu from "../Menu/Menu";
const HeaderWrapper = styled.header`
  width: 100%;
  min-height: 200px;
  @media (max-width: 787px) {
    min-height: 150px;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Menu />
    </HeaderWrapper>
  );
};
export default Header;
