import ButtonItem from "../CommonStage/ButtonItem";
import EtherumIcon from "../../../assets/images/Ethereum-icon.png";
import PolygonIcon from "../../../assets/images/polygon-icon.png";
import BinanceIcon from "../../../assets/images/binanceCoin.png";
import { ethers } from "ethers";
import { useCallback, useState } from "react";
import { web3Modal } from "../../../shared/util/handleWeb3Modal";

const SelectNetwork = ({ handleStep, handleOpen, handleWalletAddress }) => {
  const [selectedNetwork, setSelectedNetwork] = useState("");

  const connectWeb3Wallet = async () => {
    try {
      handleOpen(false);
      const web3Provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(web3Provider);
      console.log(library);
      const web3Accounts = await library.listAccounts();
      const network = await library.getNetwork();
      console.log(web3Accounts[0], network);
      handleWalletAddress(web3Accounts[0]);
      handleOpen(true);
      handleStep("walletInfo");
    } catch (error) {
      handleStep("starter");
      console.log(error);
    }
  };

  const handleSelectNetworkName = useCallback(async (name) => {
    setSelectedNetwork(name);
    sessionStorage.setItem("network", name);
    connectWeb3Wallet();
    handleStep("walletInfo");
  }, []);

  return (
    <div>
      <h2 className="text-center">Connect to</h2>
      <p className="text-center text-small text-body-text">Select Blockchain To Connect To It</p>
      <div className="d-flex flex-column gap-4 w-100">
        <ButtonItem
          mainText="Etherum"
          secondaryText="ETH"
          itemToSelect="mainnet"
          image={EtherumIcon}
          selected={selectedNetwork}
          handleSelect={handleSelectNetworkName}
        />
        <ButtonItem
          mainText="Binance Smart Chain"
          secondaryText="BNB"
          itemToSelect="binance"
          image={BinanceIcon}
          selected={selectedNetwork}
          handleSelect={handleSelectNetworkName}
        />
        <ButtonItem
          mainText="Polygon"
          itemToSelect="matic"
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
