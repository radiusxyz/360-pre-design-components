import styled from "styled-components";
import TokenDescription from "./TokenDescription";

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  margin-bottom: 41px;
  width: 100%;
`;

type Props = {};

const FrequentTokens = (props: Props) => {
  return (
    <Wrapper>
      {["MATIC", "DAI", "WETH", "WMATIC"].map((x) => (
        <TokenDescription key={x} title={x} />
      ))}
    </Wrapper>
  );
};

export default FrequentTokens;
