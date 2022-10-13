import ButtonItem from "../CommonStage/ButtonItem";
import EtherumIcon from "../../../assets/images/Ethereum-icon.png";
import PolygonIcon from "../../../assets/images/polygon-icon.png";
import BinanceIcon from "../../../assets/images/binanceCoin.png";
import { ethers } from "ethers";
import { useCallback, useEffect, useState } from "react";
import { web3Modal } from "../../../shared/util/handleWeb3Modal";
import { convertEtherNetworkNameToName } from "../../../shared/util/handleNetworkProvider";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const SelectNetwork = ({
  handleStep,
  handleOpen,
  handleWalletAddress,
  handleProvider,
  selectedNetwork,
  handleUserNetwork,
  handleSelectedNetwork,
  handleConnection,
}) => {
  const handleSelectNetworkName = useCallback(async (name) => {
    handleSelectedNetwork(name);
    sessionStorage.setItem("network", name);
    connectWeb3Wallet(name);
    handleStep("walletInfo");
  }, []);

  const connectWeb3Wallet = async (currentNetwork) => {
    alert(currentNetwork);
    try {
      //Close select network modal
      handleOpen(false);

      //Open web3modal
      const web3Provider = await web3Modal.connect();
      handleConnection(web3Provider);
      alert(web3Provider);

      const library = new ethers.providers.Web3Provider(web3Provider);
      handleProvider(library);

      const web3Accounts = await library.listAccounts();
      alert(web3Provider);

      const userNetwork = await library.getNetwork();
      handleUserNetwork(userNetwork.name);
      if (convertEtherNetworkNameToName(userNetwork.name) === currentNetwork) {
        handleWalletAddress(web3Accounts[0]);
        handleStep("walletInfo");
      } else {
        toast("Please change your wallet network", {
          duration: 6000,
          position: "top-center",
          // Styling
          style: {
            color: "#fff",
            fontSize: "16px",
            background: "#F03D3D",
          },

          // Aria
          ariaProps: {
            role: "status",
            "aria-live": "polite",
          },
        });

        handleStep("starter");
      }
      handleOpen(true);
    } catch (error) {
      handleStep("starter");
    }
  };

  const { t } = useTranslation();

  return (
    <div>
      <h2 className="text-center">{t("homeSection.modal.starterModal.mainText")}</h2>
      <p className="text-center text-small text-body-text">{t("homeSection.modal.starterModal.subText")}</p>
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
