import { useEffect, useState, useCallback } from "react";
import { ModalHeaderText } from "../ModalHeader/ModalHeaderText";
import binanceUSD from "../../../assets/images/binance_USD.png";
import binanceCoin from "../../../assets/images/BinanceUSD.png";
import TextFloatRight from "../CommonStage/TextFloatRight";
import ButtonItem from "..//CommonStage/ButtonItem";
import { ethers } from "ethers";
import { getBUSDContract } from "../../../shared/util/handleContracts";
import { networkSupportedCoins } from "../../../shared/util/handleNetworkProvider";

import { useTranslation } from "react-i18next";
const BuywithModal = ({
  handleStep,
  walletAddress,
  handleFirstCoin,
  firstCoin,
  secondCoin,
  handleSecondCoin,
  handleSelectCurrency,
  provider,
  selectedNetwork,
  handleCurrent,
}) => {
  const [selectedNetwork, setSelectedNetwork] = useState("");

  const { t } = useTranslation();

  useEffect(() => {
    const getBalance = async () => {
      const balanceInWei = await provider.getBalance(walletAddress);
      const convertedBalanc = Number(ethers.utils.formatEther(balanceInWei)).toFixed(3);
      console.log(convertedBalanc);
      handleFirstCoin(convertedBalanc);

      const busdAbiContract = getBUSDContract(provider);
      console.log(busdAbiContract);
      const contractBalance = await busdAbiContract.balanceOf(walletAddress);
      const convertedContractBalance = parseFloat(ethers.utils.formatUnits(contractBalance, 18)).toLocaleString(
        "en-US"
      );
      handleSecondCoin(convertedContractBalance);
    };
    getBalance();
  }, [walletAddress]);

  const handleSelectNetworkName = useCallback(() => {
    handleStep("buyamount");
  }, [handleStep]);
  return (
    <>
      <div>
        <ModalHeaderText header="Buying With" caption="Select The Cryptocurrency You Want To Use" />
        {networkSupportedCoins(selectedNetwork).map(({ id, name, image, ticker }) => (
          <div key={id}>
            <TextFloatRight balanceValue={id === 1 ? firstCoin : secondCoin} />
            <ButtonItem
              mainText={name}
              secondaryText={ticker}
              image={image}
              handleSelect={handleSelectNetworkName}
              getAllValues={(...elements) =>
                handleSelectCurrency({
                  name: elements[2],
                  ticker: elements[3],
                  image: elements[1],
                  balance: firstCoin,
                })
              }
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default BuywithModal;
