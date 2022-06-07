import styled from "styled-components";

const ContentWrapper = styled.main`
  width: 100%;
  min-height: 10rem;
`;

const Content = ({children})=>{
    return (<ContentWrapper>
        {children}
    </ContentWrapper>)
}
export default Content;