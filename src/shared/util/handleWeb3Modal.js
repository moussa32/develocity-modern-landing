import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { networkProviderOptions } from "./handleNetworkProvider";

const userSelectedNetwork = sessionStorage.getItem("network");

export const web3Modal = new Web3Modal({
  network: userSelectedNetwork,
  cacheProvider: false,
  providerOptions: {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        rpc: networkProviderOptions(userSelectedNetwork),
      },
    },
  },
});
