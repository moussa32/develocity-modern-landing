import EtherumImage from "../../assets/images/Ethereum-icon.png";
import TetherImage from "../../assets/images/Tether-icon.png";
import binanceUSD from "../../assets/images/bscCoin.png";
import binanceCoin from "../../assets/images/BinanceUSD.png";
import MaticCoinImage from "../../assets/images/matic-icon.png";

export const convertEtherNetworkNameToName = (networkTicker) => {
  switch (networkTicker) {
    case "homestead":
      return "mainnet";
    case "bnb":
      return "binance";
    case "bnbt":
      return "binance";
    case "matic":
      return "matic";
  }
};

export const networkProviderOptions = (network) => {
  switch (network) {
    case "mainnet":
      return { 1: "https://mainnet.infura.io/v3/" };
    case "binance":
      return { 56: "https://bsc-dataseed.binance.org/" };
    case "matic":
      return { 137: "https://rpc-mainnet.maticvigil.com/" };
  }
};

export const networkSupportedCoins = (network) => {
  switch (network) {
    case "mainnet":
      return [
        { id: 1, name: "Etherum Coin", ticker: "ETH", image: EtherumImage },
        { id: 2, name: "Tether USD", ticker: "USDT", image: TetherImage },
      ];
    case "binance":
      return [
        { id: 1, name: "Binance Coin", ticker: "BNB", image: binanceCoin },
        { id: 2, name: "Binance USD", ticker: "BUSD", image: binanceUSD },
      ];
    case "matic":
      return [
        { id: 1, name: "Matic Coin", ticker: "MATIC", image: MaticCoinImage },
        { id: 2, name: "Tether USD", ticker: "USDT", image: TetherImage },
      ];
  }
};

export const getSecondCoinContractAddress = (networkName) => {
  switch (networkName) {
    case "mainnet":
      return "0xdac17f958d2ee523a2206206994597c13d831ec7";
    case "binance":
      return "0xe9e7cea3dedca5984780bafc599bd69add087d56";
    case "matic":
      return "0xc2132d05d31c914a87c6611c10748aeb04b58e8f";
  }
};
