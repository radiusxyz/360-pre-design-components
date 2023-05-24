import {
  Wrapper,
  TransactionDetails,
  TokenPair,
  Token,
  TokenLogo,
  TokenDetails,
  Divider,
  Column,
  Header,
  Data,
  ExchanceIcon,
} from "./ConfirmationInfoStyles";

import exchange from "../../assets/images/exchange.png";

type Props = {};

const ConfirmationInfo = (props: Props) => {
  return (
    <Wrapper>
      <TokenPair>
        <Token>
          <TokenLogo />
          <TokenDetails>0.225 MATIC</TokenDetails>
        </Token>
        <ExchanceIcon>
          <img src={exchange} alt="exchange_icon" />
        </ExchanceIcon>
        <Token>
          <TokenLogo />
          <TokenDetails>0.225 DAI</TokenDetails>
        </Token>
      </TokenPair>
      <Divider />
      <TransactionDetails>
        <Column>
          <Header>Time</Header>
          <Data>60sec</Data>
        </Column>
        <Column>
          <Header>Fee</Header>
          <Data>No Fee</Data>
        </Column>
        <Column>
          <Header>Slippage</Header>
          <Data>0.01%</Data>
        </Column>
        <Column>
          <Header>Extra profit</Header>
          <Data>0.012 MATIC</Data>
        </Column>
        <Column>
          <Header>Your save</Header>
          <Data>0.058 MATIC</Data>
        </Column>
      </TransactionDetails>
    </Wrapper>
  );
};

export default ConfirmationInfo;
