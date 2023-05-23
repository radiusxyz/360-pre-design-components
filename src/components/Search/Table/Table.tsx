import React from "react";
import TableRow from "./TableRow/TableRow";
import { Tokens } from "../../../assets/data";
import { Wrapper } from "./TableStyles";

type Props = { tokens: Tokens };

const Table: React.FC<Props> = (props: Props) => {
  return (
    <Wrapper>
      {props.tokens.map((token) => (
        <TableRow
          key={token.title}
          title={token.title}
          balance={token.balance}
          balanceInUSD={token.balanceInUSD}
        />
      ))}
    </Wrapper>
  );
};

export default Table;
