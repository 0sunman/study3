import styled from "styled-components";

const PageWrapper = styled.div`
display: block;
margin: 0 auto;
margin-top: 70px;
text-align: center;
width: 50%;
& > div {
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-template-rows: 1fr;
  border: 1px solid #000;
  align-items: center;
}
div > div {
  min-height: 30px;
}
div > div:nth-child(n + 1) {
  border: 0px;
}
div > div:nth-child(2n) {
  border-left: 1px solid #000;
}
div:nth-child(n + 2) {
  border-top: 0px;
}

div:nth-child(3) > div {
  grid-column: 1/3;
  grid-template-columns: 1fr;
  min-height: 100px;
  margin: 10px;
  text-align: left;
}

@media(max-width:787px){
  width:100%;
}
`;
const GridContainer = styled.div``;
const GridItem = styled.div``;

const PageComponent = ({subject,author,content})=>{
    return (
    <PageWrapper>
        <GridContainer>
            <GridItem>제목</GridItem>
            <GridItem>{subject}</GridItem>
        </GridContainer>
        <GridContainer>
            <GridItem>작성자</GridItem>
            <GridItem>{author}</GridItem>
        </GridContainer>
        <GridContainer>
            <GridItem>{content}</GridItem>
        </GridContainer>
  </PageWrapper>)
}

export default PageComponent;