import TokenDescription from "../../FrequentTokens/TokenDescription/TokenDescription";
import { Wrapper } from "./TableRowStyles";
import TokenAmount from "./TokenAmount/TokenAmount";
import { Token } from "../../../../assets/data";

type Props = Token;

const TableRow: React.FC<Props> = (props: Props) => {
  return (
    <Wrapper>
      <TokenDescription title={props.title} />
      <TokenAmount balance={props.balance} balanceInUSD={props.balanceInUSD} />
    </Wrapper>
  );
};

export default TableRow;
