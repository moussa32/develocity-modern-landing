export const networkProviderOptions = (network) => {
  switch (network) {
    case "Etherum":
      return { 1: "https://mainnet.infura.io/v3/" };
    case "Polygon":
      return { 137: "https://rpc-mainnet.maticvigil.com/" };
    case "Binance Smart Chain":
      return { 56: "https://bsc-dataseed.binance.org/" };
  }
};
