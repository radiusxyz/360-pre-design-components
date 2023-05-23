export type Token = {
  title: string;
  balance: number;
  balanceInUSD: number;
};

export type Tokens = Token[];

export const tokens: Tokens = [
  {
    title: "MATIC",
    balance: 15578252.121,
    balanceInUSD: 15584.15,
  },
  {
    title: "DAI",
    balance: 15578252.121,
    balanceInUSD: 15584.15,
  },
  {
    title: "WETH",
    balance: 15578252.121,
    balanceInUSD: 15584.15,
  },
  {
    title: "WMATIC",
    balance: 15578252.121,
    balanceInUSD: 15584.15,
  },
  {
    title: "BTC",
    balance: 15578252.121,
    balanceInUSD: 15584.15,
  },
  {
    title: "ETH",
    balance: 15578252.121,
    balanceInUSD: 15584.15,
  },
];
