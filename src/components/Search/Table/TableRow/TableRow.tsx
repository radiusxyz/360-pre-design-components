import TokenDescription from "../../FrequentTokens/TokenDescription/TokenDescription";
import { Wrapper } from "./TableRowStyles";
import TokenAmount from "./TokenAmount/TokenAmount";
import { Token } from "../../../../assets/data";

type Props = { token: Token };

const TableRow: React.FC<Props> = ({ token }: Props) => {
  return (
    <Wrapper>
      <TokenDescription title={token.title} />
      <TokenAmount balance={token.balance} balanceInUSD={token.balanceInUSD} />
    </Wrapper>
  );
};

export default TableRow;
