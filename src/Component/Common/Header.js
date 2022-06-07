import styled from "styled-components";
import Menu from "../Menu/Menu";
const HeaderWrapper = styled.header`
  width: 100%;
  min-height: 200px;
`;

const Header = ()=>{
    return (<HeaderWrapper>
    <Menu />
  </HeaderWrapper>);
}
export default Header