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

type Props = {
  details: {
    from: { token: string; amount: number };
    to: { token: string; amount: number };
    time: number;
    fee: string;
    slippage: number;
    extraProfit: number;
    yourSave: number;
  };
};

const ConfirmationInfo: React.FC<Props> = ({ details }: Props) => {
  return (
    <Wrapper>
      <TokenPair>
        <Token>
          <TokenLogo />
          <TokenDetails>{`${details.from.amount} ${details.from.token}`}</TokenDetails>
        </Token>
        <ExchanceIcon>
          <img src={exchange} alt="exchange_icon" />
        </ExchanceIcon>
        <Token>
          <TokenLogo />
          <TokenDetails>{`${details.to.amount} ${details.to.token}`}</TokenDetails>
        </Token>
      </TokenPair>
      <Divider />
      <TransactionDetails>
        <Column>
          <Header>Time</Header>
          <Data>{details.time}sec</Data>
        </Column>
        <Column>
          <Header>Fee</Header>
          <Data>{details.fee}</Data>
        </Column>
        <Column>
          <Header>Slippage</Header>
          <Data>{details.slippage}%</Data>
        </Column>
        <Column>
          <Header>Extra profit</Header>
          <Data>{`${details.extraProfit} ${details.from.token}`}</Data>
        </Column>
        <Column>
          <Header>Your save</Header>
          <Data>{`${details.yourSave} ${details.from.token} `}</Data>
        </Column>
      </TransactionDetails>
    </Wrapper>
  );
};

export default ConfirmationInfo;
