import styled from "styled-components";
const FooterWrapper = styled.footer`
  width: 100%;
  p {
    text-align: center;
  }
`;

const Footer = () =>{
return (
    <FooterWrapper>
        <p>Copyright(c) 2022 All rights reserved.</p>
    </FooterWrapper>
    );
}

export default Footer;