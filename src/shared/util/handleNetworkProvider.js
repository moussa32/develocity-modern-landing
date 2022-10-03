export const networkProviderOptions = (network) => {
  switch (network) {
    case "mainnet":
      return { 1: "https://mainnet.infura.io/v3/" };
    case "matic":
      return { 137: "https://rpc-mainnet.maticvigil.com/" };
    case "binance":
      return { 56: "https://bsc-dataseed.binance.org/" };
  }
};
