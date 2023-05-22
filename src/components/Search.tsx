import React from "react";
import styled from "styled-components";
import InputSearch from "./InputSearch";
import Table from "./Table";
import FrequentTokens from "./FrequentTokens";

type Props = {};

const TableWrapper = styled.div`
  padding: 58px 44px 18px 44px;
  height: 581px;
  width: 717px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
`;

const Bridge = styled.p`
  margin-top: 18px;
  color: #a3a3a3;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-decoration-line: underline;
  &:hover {
    cursor: pointer;
  }
`;

const Search: React.FC = (props: Props) => {
  return (
    <TableWrapper>
      <InputSearch />
      <FrequentTokens />
      <Table />
      <Bridge>Bridge tokens to Polygon</Bridge>
    </TableWrapper>
  );
};

export default Search;
