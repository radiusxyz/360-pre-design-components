import TokenDescription from "./TokenDescription";
import { Wrapper } from "./TableRowStyles";
import TokenAmount from "./TokenAmount";
import { Token } from "../../assets/data";

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
