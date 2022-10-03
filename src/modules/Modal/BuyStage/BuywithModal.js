import { useEffect, useState, useCallback } from "react";
import { ModalHeaderText } from "../ModalHeader/ModalHeaderText";
import binanceCoin from "../../../assets/images/bscCoin.svg";
import binanceUSD from "../../../assets/images/BinanceUSD.png";
import TextFloatRight from "../CommonStage/TextFloatRight";
import ButtonItem from "..//CommonStage/ButtonItem";
import { ethers } from "ethers";

export default function BuywithModal({ handleStep, walletAddress }) {
  const [selectedNetwork, setSelectedNetwork] = useState("");
  const [binanceCoinBalance, setBinanceCoinBalance] = useState(0);
  const [binanceUSDBalance, setBinanceUSDBalance] = useState(0);

  useEffect(() => {
    const getBalance = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const balanceInWei = await provider.getBalance("0xa6f79b60359f141df90a0c745125b131caaffd12");
      const convertedBalanc = Number(ethers.utils.formatEther(balanceInWei)).toFixed(3);
      setBinanceCoinBalance(convertedBalanc);

      const busdAbiContract = new ethers.Contract(
        "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
        ["function balanceOf(address) view returns (uint)"],
        provider
      );
      const contractBalance = await busdAbiContract.balanceOf("0xf977814e90da44bfa03b6295a0616a897441acec");
      const convertedContractBalance = parseFloat(ethers.utils.formatUnits(contractBalance, 18)).toLocaleString(
        "en-US"
      );
      setBinanceUSDBalance(convertedContractBalance);
    };
    getBalance();
  }, []);

  const handleSelectNetworkName = useCallback(
    (name) => {
      handleStep("buyamount");
      setSelectedNetwork(name);
    },
    [handleStep]
  );
  return (
    <>
      <div>
        <ModalHeaderText header="Buying With" caption="Select The Cryptocurrency You Want To Use" />
        <TextFloatRight balanceValue={binanceCoinBalance} />
        <ButtonItem
          mainText="Binance Coin"
          secondaryText="BNB"
          image={binanceCoin}
          selected={selectedNetwork}
          handleSelect={handleSelectNetworkName}
        />
        <TextFloatRight balanceValue={binanceUSDBalance} />
        <ButtonItem
          mainText="Binance USD"
          secondaryText="BUSD"
          image={binanceUSD}
          selected={selectedNetwork}
          handleSelect={handleSelectNetworkName}
        />
      </div>
    </>
  );
}
