import React from "react";
import TableRow from "./TableRow";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;
`;

type Props = {};

const Table: React.FC = (props: Props) => {
  return (
    <Wrapper>
      {["MATIC", "DAI", "WETH", "WMATIC", "ETH", "BTC"].map((x) => (
        <TableRow key={x} title={x} />
      ))}
    </Wrapper>
  );
};

export default Table;
