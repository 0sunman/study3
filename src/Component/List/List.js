import styled from "styled-components";
import ListRow from "./ListRow";
const ListWrap = styled.div`
  margin: 0 auto;
  max-width: 1000px;
`;
const ListHeader = styled.div`
  div {
    font-weight: bold;
  }
`;
const ListBody = styled.div``;
const ListFooter = styled.div``;

const List = ({ header, record }) => {
  return (
    <ListWrap>
      <ListHeader>
        <ListRow record={header} type="head"></ListRow>
      </ListHeader>
      <ListBody>
        {record &&
          record.length > 0 &&
          record
            .map((recordData, idx) => {
              return <ListRow key={idx} record={recordData}></ListRow>;
            })
            .sort((a, b) => {
              return b.props.record.num - a.props.record.num;
            })}
      </ListBody>
      <ListFooter></ListFooter>
    </ListWrap>
  );
};

export default List;
