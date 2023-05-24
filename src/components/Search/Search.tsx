import React, { useState } from "react";
import InputSearch from "./InputSearch";
import Table from "./Table";
import FrequentTokens from "./FrequentTokens";
import { tokens, Tokens } from "../../assets/data";
import { Bridge, TableWrapper } from "./SearchStyles";

const Search: React.FC = () => {
  const [tokensState, setTokensState] = useState(tokens);

  const handleTokensState = (handler: () => Tokens): void => {
    setTokensState(handler);
  };

  return (
    <TableWrapper>
      <InputSearch handler={handleTokensState} />
      <FrequentTokens />
      <Table tokens={tokensState} />
      <Bridge>Bridge tokens to Polygon</Bridge>
    </TableWrapper>
  );
};

export default Search;
