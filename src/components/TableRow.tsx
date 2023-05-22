import styled from "styled-components";
import TokenDescription from "./TokenDescription";
import TokenAmount from "./TokenAmount";

const Wrapper = styled.div`
  padding: 15px 38px 28px 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #f1f1f1;
`;

type Props = { title: string };

const TableRow: React.FC<Props> = (props: Props) => {
  return (
    <Wrapper>
      <TokenDescription title={props.title} />
      <TokenAmount />
    </Wrapper>
  );
};

export default TableRow;
