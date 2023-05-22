import React from "react";
import styled from "styled-components";
import Input from "./Input";
import TableRow from "./TableRow";

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
  text-decoration: underline;
  margin-top: 18px;
`;

const Search = (props: Props) => {
  return (
    <TableWrapper>
      <Input />
      <TableRow />
      <Bridge>Bridge tokens to Polygon</Bridge>
    </TableWrapper>
  );
};

export default Search;
