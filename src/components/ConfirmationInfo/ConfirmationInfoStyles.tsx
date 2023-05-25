import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #f5f5f5;
  padding: 44px 42px 40px 42px;
  max-height: 296px;
  height: 100%;
  width: 100%;
`;

export const TokenPair = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 38px;
  gap: 97px;
`;

export const ExchanceIcon = styled.div``;

export const Token = styled.div`
  display: flex;
  flex-shrink: 1;
  gap: 13px;
  flex-direction: column;
  align-items: center;
`;

export const TokenLogo = styled.div`
  width: 57px;
  height: 57px;

  border-radius: 50%;
  background-color: #cacaca;
`;

export const TokenDetails = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #666666;
  white-space: nowrap;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d6d6d6;
  margin-bottom: 33px;
`;

export const TransactionDetails = styled.div`
  width: auto;
  display: flex;
  align-items: start;
  justify-content: center;
  overflow: hidden;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  flex-grow: 1;
`;

export const Header = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #999999;
  white-space: nowrap;
`;

export const Data = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #333333;
  width: auto;
  white-space: nowrap;
`;
