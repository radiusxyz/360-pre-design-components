import styled from "styled-components";
import cuid from "cuid";
import { Transaction } from "../../App";
import "./table.css";

const Wrapper = styled.div`
  display: flex;
`;

type Props = { transactions: Transaction[] };

const Table: React.FC<Props> = (props: Props) => {
  console.log(props);
  // return (
  //   <table>
  //     <thead>
  //       <tr>
  //         <th>Date</th>
  //         <th>From</th>
  //         <th>To</th>
  //         <th>Extra profit</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {props.transactions.map((tx) => (
  //         <tr key={cuid()}>
  //           <td>{tx.date}</td>
  //           <td>{`${tx.from.amount} ${tx.from.token}`}</td>
  //           <td>{`${tx.to.amount} ${tx.to.token}`}</td>
  //           <td>{`${tx.extraProfit.amount} ${tx.extraProfit.token} `}</td>
  //         </tr>
  //       ))}
  //     </tbody>
  //   </table>
  // );

  return (
    <table>
      <colgroup>
        <col />
        <col />
        <col style={{ backgroundColor: "#97DB9A" }} />
        <col style={{ width: 200 }} />
        <col style={{ backgroundColor: "#97DB9A" }} />
        <col
          style={{
            backgroundColor: "#DCC48E",
            border: "border:4px solid #C1437A",
          }}
        />
        <col />
        <col style={{ width: 42 }} />
      </colgroup>
      <thead>
        <tr>
          <td>&nbsp;</td>
          <th>Mon</th>
          <th>Tues</th>
          <th>Wed</th>
          <th>Thurs</th>
          <th>Fri</th>
          <th>Sat</th>
          <th>Sun</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1st period</th>
          <td>English</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>German</td>
          <td>Dutch</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <th>2nd period</th>
          <td>English</td>
          <td>English</td>
          <td>&nbsp;</td>
          <td>German</td>
          <td>Dutch</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <th>3rd period</th>
          <td>&nbsp;</td>
          <td>German</td>
          <td>&nbsp;</td>
          <td>German</td>
          <td>Dutch</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <th>4th period</th>
          <td>&nbsp;</td>
          <td>English</td>
          <td>&nbsp;</td>
          <td>English</td>
          <td>Dutch</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
