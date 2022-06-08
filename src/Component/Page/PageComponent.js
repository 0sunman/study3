import styled from "styled-components";

const PageWrapper = styled.div`
  display: block;
  margin: 0 auto;
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
  .ql-container.ql-snow {
    border-left: 0px solid #000;
  }
  .ql-editor.ql-blank {
    min-height: 300px;
  }

  div:nth-child(3) > div {
    grid-column: 1/3;
    grid-template-columns: 1fr;
    min-height: 400px;
    text-align: left;
  }

  @media (max-width: 787px) {
    width: 100%;
  }

  .content {
    padding: 5px;
  }
  .content p {
    padding: 0;
    margin: 0;
  }
`;
const GridContainer = styled.div``;
const GridItem = styled.div``;
const PageComponent = ({ type, subject, author, content }) => {
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
      <GridContainer className="content">
        {type === "page" ? (
          <GridItem dangerouslySetInnerHTML={{ __html: content }}></GridItem>
        ) : (
          <GridItem>{content}</GridItem>
        )}
      </GridContainer>
    </PageWrapper>
  );
};

export default PageComponent;
