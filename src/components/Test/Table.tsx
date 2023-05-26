import styled from "styled-components";
import cuid from "cuid";
import { Transaction } from "../../App";
import "./table.css";
import Pagination from "./Pagination";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 75px;
`;

type Props = { transactions: Transaction[] };

const Table: React.FC<Props> = (props: Props) => {
  return (
    <Wrapper>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>From</th>
            <th></th>
            <th>To</th>
            <th>Extra profit</th>
          </tr>
        </thead>
        <tbody>
          {props.transactions.map((tx) => (
            <tr key={cuid()}>
              <td className="date">{tx.date}</td>
              <td className="from">{`${tx.from.amount} ${tx.from.token}`}</td>
              <td>&rarr;</td>
              <td className="to">{`${tx.to.amount} ${tx.to.token}`}</td>
              <td className="extra-profit">{`${tx.extraProfit.amount} ${tx.extraProfit.token} `}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </Wrapper>
  );
};
export default Table;
