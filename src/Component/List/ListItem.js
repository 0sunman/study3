import styled from "styled-components";

const ListGridItem = styled.div`
  text-align: center;
`;

const ListItem = ({ children }) => {
  return <ListGridItem>{children}</ListGridItem>;
};
export default ListItem;
