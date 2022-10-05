import { useEffect, useState, useCallback } from "react";
import { ModalHeaderText } from "../ModalHeader/ModalHeaderText";
import binanceUSD from "../../../assets/images/binance_USD.png";
import binanceCoin from "../../../assets/images/BinanceUSD.png";
import TextFloatRight from "../CommonStage/TextFloatRight";
import ButtonItem from "..//CommonStage/ButtonItem";
import { ethers } from "ethers";
import { getBUSDContract } from "../../../shared/util/handleContracts";
import { useTranslation } from 'react-i18next';

export default function BuywithModal({
  handleStep,
  walletAddress,
  handleBinanceCoin,
  binanceBalance,
  binanceUSDBalance,
  handleBinanceUSD,
  handleSelectCurrency,
  provider,
  handleCurrent
}) {
  const [selectedNetwork, setSelectedNetwork] = useState("");
  
  const { t } = useTranslation();

  useEffect(() => {
    const getBalance = async () => {
      const balanceInWei = await provider.getBalance(walletAddress);
      const convertedBalanc = Number(ethers.utils.formatEther(balanceInWei)).toFixed(3);
      console.log(convertedBalanc);
      handleBinanceCoin(convertedBalanc);

      const busdAbiContract = getBUSDContract(provider);
      console.log(busdAbiContract);
      const contractBalance = await busdAbiContract.balanceOf(walletAddress);
      const convertedContractBalance = parseFloat(ethers.utils.formatUnits(contractBalance, 18)).toLocaleString(
        "en-US"
      );
      handleBinanceUSD(convertedContractBalance);
    };
    getBalance();
  }, [walletAddress]);

  const handleSelectNetworkName = useCallback(
    (name) => {
      handleStep("buyamount");
      setSelectedNetwork(name);
      handleCurrent()

    },
    [handleStep]
  );
  return (
    <>
      <div>
        <ModalHeaderText header={t("homeSection.modal.buyWithModal.mainText")} caption={t("homeSection.modal.buyWithModal.subText")} />
        <TextFloatRight balanceValue={binanceBalance} />
        <ButtonItem
          mainText={t("homeSection.modal.buyWithModal.btns.binanceCoin.btnMainText")}
          secondaryText="BNB"
          image={binanceCoin}
          selected={selectedNetwork}
          handleSelect={handleSelectNetworkName}
          getAllValues={(...elements) =>
            handleSelectCurrency({
              name: elements[2],
              ticker: elements[3],
              image: elements[1],
              balance: binanceBalance,
            })
          }
        />
        <TextFloatRight balanceValue={binanceUSDBalance} />
        <ButtonItem
          mainText={t("homeSection.modal.buyWithModal.btns.binanceUSD.btnMainText")}
          secondaryText="BUSD"
          image={binanceUSD}
          selected={selectedNetwork}
          handleSelect={handleSelectNetworkName}
          getAllValues={(...elements) =>
            handleSelectCurrency({
              name: elements[2],
              ticker: elements[3],
              image: elements[1],
              balance: binanceUSDBalance,
            })
          }
        />
      </div>
    </>
  );
}
