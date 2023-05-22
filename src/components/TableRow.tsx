import styled from "styled-components";
import TokenDescription from "./TokenDescription";
import TokenAmount from "./TokenAmount";

const Wrapper = styled.div`
  padding: 15px 38px 28px 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

type Props = {};

const TableRow = (props: Props) => {
  return (
    <Wrapper>
      <TokenDescription />
      <TokenAmount />
    </Wrapper>
  );
};

export default TableRow;
