import React from "react";
import TableRow from "./TableRow";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
  width: 100%;
  overflow: scroll;
`;

type Props = {};

const Table = (props: Props) => {
  return (
    <Wrapper>
      {[1, 2, 3, 4, 5, 6].map((x) => (
        <TableRow key={x} />
      ))}
    </Wrapper>
  );
};

export default Table;
