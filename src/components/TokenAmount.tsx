import styled from "styled-components";
type Props = {};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 9px;
`;

const Balance = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: #000000;
`;

const BalanceInUSD = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: right;
  color: #000000;
`;

const TokenAmount: React.FC = (props: Props) => {
  return (
    <Wrapper>
      <Balance>15578352.121</Balance>
      <BalanceInUSD>$15584.15</BalanceInUSD>
    </Wrapper>
  );
};

export default TokenAmount;
