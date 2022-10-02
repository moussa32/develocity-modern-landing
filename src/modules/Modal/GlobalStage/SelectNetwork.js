import ButtonItem from "../CommonStage/ButtonItem";
import EtherumIcon from "../../../assets/images/Ethereum-icon.png";
import PolygonIcon from "../../../assets/images/polygon-icon.png";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { useCallback, useState } from "react";
import WalletConnectProvider from "@walletconnect/web3-provider";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: { 56: "https://bsc-dataseed.binance.org/" },
    },
  },
};

const SelectNetwork = ({ handleStep, handleNetwork }) => {
  const [selectedNetwork, setSelectedNetwork] = useState("");

  const handleSelectNetwork = async (networkName) => {
    const web3Modal = new Web3Modal({
      network: networkName,
      cacheProvider: false,
      providerOptions,
    });
    const instance = await web3Modal.connect();

    const provider = new ethers.providers.Web3Provider(instance);
    console.log(provider);
  };

  const handleSelectNetworkName = useCallback((name) => {
    handleSelectNetwork(name);
    setSelectedNetwork(name);
  }, []);

  return (
    <div>
      <h2 className="text-center">Connect to</h2>
      <p className="text-center text-small text-body-text">Select Blockchain To Connect To It</p>
      <div className="d-flex flex-column gap-4 w-100">
        <ButtonItem
          mainText="Etherum"
          secondaryText="ETH"
          image={EtherumIcon}
          selected={selectedNetwork}
          handleSelect={handleSelectNetworkName}
        />
        <ButtonItem
          mainText="Binance Smart Chain"
          secondaryText="BNB"
          image={EtherumIcon}
          selected={selectedNetwork}
          handleSelect={handleSelectNetworkName}
        />
        <ButtonItem
          mainText="Polygon"
          secondaryText="MATIC"
          image={PolygonIcon}
          selected={selectedNetwork}
          handleSelect={handleSelectNetworkName}
        />
      </div>
    </div>
  );
};

export default SelectNetwork;
