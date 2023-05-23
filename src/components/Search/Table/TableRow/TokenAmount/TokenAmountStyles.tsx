import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 9px;
`;

export const Balance = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: #000000;
`;

export const BalanceInUSD = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: right;
  color: #000000;
`;
