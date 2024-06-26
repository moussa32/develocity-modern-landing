import { useEffect, useMemo, useState } from "react";
import TextItem from "../CommonStage/TextItem";
import toast from "react-hot-toast";
import contractAbi from "../../../assets/contractABI.json";
import { ethers } from "ethers";
import { testNetContract } from "../../../shared/constants/contractAddress";
import { getSecondCoinContract } from "../../../shared/util/handleContracts";
import { ReactComponent as SuccessIcon } from "../../../assets/images/SuccessIcon.svg";
import { useTranslation } from "react-i18next";

const BuyAmountModal = ({
  handleStep,
  walletAddress,
  disconnect,
  currentCurrency,
  provider,
  handleFinalAmount,
  handleCurrent,
  selectedNetwork,
}) => {
  const { t } = useTranslation();

  const [coinBalance, setCoinBalance] = useState(0);
  const [convertedDeve, setConvertedDeve] = useState(0);
  const [isBuyButtonLoading, setIsBuyButtonLoading] = useState(true);
  const [buyButtonText, setBuyButtonText] = useState(t("homeSection.modal.buyAmountModal.btns.buy"));
  const [isApprovedButtonLoading, setIsApprovedButtonDisabled] = useState(false);
  const [isApproved, setIsApproved] = useState(false);

  const memoizedCoinBalanceConverted = useMemo(() => ethers.utils.parseEther(coinBalance.toString()), [coinBalance]);

  const walletContract = new ethers.Contract(testNetContract, contractAbi, provider);
  const signerContract = new ethers.Contract(testNetContract, contractAbi, provider.getSigner());

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (currentCurrency.ticker === "BUSD") {
        const calculateDeveCoins = await walletContract.getbusdPrice(memoizedCoinBalanceConverted);
        const returnedCalculateDeveCoins = Number(ethers.utils.formatEther(calculateDeveCoins.toString())).toFixed(2);

        if (!isApproved) {
          await walletContract
            .getBusdAll(calculateDeveCoins, walletAddress)
            .then((res) => {
              setIsApproved(res);
              if (res) {
                toast(
                  <div>
                    <span className="text-success" style={{ color: "#00ac5d", marginRight: "0.5rem" }}>
                      Approved!
                    </span>
                    You can swap your coins.
                  </div>,
                  {
                    duration: 4000,
                    position: "top-center",
                    // Styling
                    style: {
                      fontSize: "16px",
                      background: "#DCFFEF",
                    },
                    // Custom Icon
                    icon: <SuccessIcon />,

                    // Aria
                    ariaProps: {
                      role: "status",
                      "aria-live": "polite",
                    },
                  }
                );
                setIsBuyButtonLoading(false);
                setIsApprovedButtonDisabled(true);
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
        setConvertedDeve(returnedCalculateDeveCoins.toLocaleString("en-US"));
      } else {
        if (coinBalance > 0) {
          setIsBuyButtonLoading(false);
          const calculateDeveCoins = await walletContract.getwethPrice(memoizedCoinBalanceConverted);
          setConvertedDeve(
            Number(ethers.utils.formatEther(calculateDeveCoins.toString())).toFixed(2).toLocaleString("en-US")
          );
        } else {
          setIsBuyButtonLoading(true);
          setConvertedDeve(0);
        }
      }
    }, 500);

    return () => {
      clearTimeout(delayDebounceFn);
    };
  }, [coinBalance, walletAddress]);

  const handleBuy = async () => {
    setIsBuyButtonLoading(true);
    setBuyButtonText(t("homeSection.modal.buyAmountModal.btns.Loading"));
    const urlParams = new URLSearchParams(window.location.search);
    const ref = urlParams.get("ref");

    const gasPrice = await signerContract.estimateGas
      .buyTokens(ref, { value: memoizedCoinBalanceConverted })
      .catch((error) => {
        console.log(error);
      });

    signerContract
      .buyTokens(ref, { value: memoizedCoinBalanceConverted, gasLimit: gasPrice })
      .then((res) => {
        console.log(res);
        res.wait().then((receipt) => {
          setIsBuyButtonLoading(false);
          setBuyButtonText(t("homeSection.modal.buyAmountModal.btns.buy"));
          handleFinalAmount(convertedDeve);
          handleStep("final");
          handleCurrent();
        });
      })
      .catch((error) => {
        const { code: errorCode } = error.data;
        if (errorCode === -32000) {
          toast("You don't have enough native tokens or ensure the network has been added correctly", {
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
        }
        setIsBuyButtonLoading(false);
      });
  };

  const handleApprove = async () => {
    setIsApprovedButtonDisabled(true);
    const BUSDContract = getSecondCoinContract(provider.getSigner(), selectedNetwork);
    await BUSDContract.approve(testNetContract, ethers.utils.parseEther("1000000"))
      .then((res) => {
        console.log(res);
        setIsApprovedButtonDisabled(false);
        setIsBuyButtonLoading(false);
        toast(
          <div>
            <span className="text-success" style={{ color: "#00ac5d", marginRight: "0.5rem" }}>
              Approved!
            </span>
            You can swap your coins.
          </div>,
          {
            duration: 4000,
            position: "top-center",
            // Styling
            style: {
              fontSize: "16px",
              background: "#DCFFEF",
            },
            // Custom Icon
            icon: <SuccessIcon />,

            // Aria
            ariaProps: {
              role: "status",
              "aria-live": "polite",
            },
          }
        );
      })
      .catch((error) => console.log(error));
  };

  const handleBuyBUSD = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const ref = urlParams.get("ref");

    const gasPrice = await signerContract.estimateGas
      .buyTokensBusd(memoizedCoinBalanceConverted.toString(), ref)
      .catch((error) => {
        const { code: errorCode } = error.data;
        if (errorCode === -32603) {
          toast(`You don't have enough balance to buy ${convertedDeve}`, {
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
        }
      });
    setIsBuyButtonLoading(true);
    setBuyButtonText(t("homeSection.modal.buyAmountModal.btns.Loading"));

    await signerContract
      .buyTokensBusd(memoizedCoinBalanceConverted.toString(), ref, { gasLimit: gasPrice })
      .then((res) => {
        res.wait().then((receipt) => {
          setIsBuyButtonLoading(false);
          setBuyButtonText(t("homeSection.modal.buyAmountModal.btns.buy"));
          handleFinalAmount(convertedDeve);
          handleStep("final");
          handleCurrent();
        });
      })
      .catch((error) => {
        console.log(error);
        setBuyButtonText(t("homeSection.modal.buyAmountModal.btns.buy"));
        setIsBuyButtonLoading(false);
      });
  };

  return (
    <section className="d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex address-float w-100">
        <svg
          className="close-icon"
          onClick={() => disconnect()}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            id="Vector"
            d="M0,5.66,5.66,0"
            transform="translate(9.17 9.17)"
            fill="none"
            stroke="#23282c"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          />
          <path
            id="Vector-2"
            data-name="Vector"
            d="M5.66,5.66,0,0"
            transform="translate(9.17 9.17)"
            fill="none"
            stroke="#23282c"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          />
          <path
            id="Vector-3"
            data-name="Vector"
            d="M7,20h6c5,0,7-2,7-7V7c0-5-2-7-7-7H7C2,0,0,2,0,7v6C0,18,2,20,7,20Z"
            transform="translate(2 2)"
            fill="none"
            stroke="#8b8b8b"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          />
          <path id="Vector-4" data-name="Vector" d="M0,0H24V24H0Z" fill="none" opacity="0" />
        </svg>
        <h5 className="address">{walletAddress && walletAddress.slice(0, 10) + "..." + walletAddress.slice(31, 41)}</h5>
      </div>

      <div className="mt-4">
        <div className="d-flex justify-content-between">
          <label className="first-lable">{t("homeSection.modal.buyAmountModal.lables.from")}</label>
          <h5 className="second-lable">
            {t("homeSection.modal.buyAmountModal.balance")} {currentCurrency.balance}
          </h5>
        </div>
        <div className="d-flex s-container">
          <input
            className="w-75"
            value={coinBalance}
            type="number"
            onChange={(e) => {
              if (currentCurrency.ticker === "BUSD") {
                if (e.target.value <= 100000) {
                  setCoinBalance(Number(e.target.value));
                }
              } else {
                if (e.target.value < 1000) {
                  setCoinBalance(Number(e.target.value));
                }
              }
            }}
            placeholder="0"
            maxLength={3}
          />
          <div className="bnb-container d-flex bg-white justify-content-center align-items-center w-25">
            <img src={currentCurrency.image} width="23" />
            <span>{currentCurrency.ticker}</span>
          </div>
        </div>
      </div>

      <svg
        className="mt-3"
        xmlns="http://www.w3.org/2000/svg"
        width="16.284"
        height="21.333"
        viewBox="0 0 16.284 21.333"
      >
        <path
          id="Vector"
          d="M14.163,0,7.082,7.082,0,0"
          transform="translate(1.061 13.502)"
          fill="none"
          stroke="#292d32"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Vector-2"
          data-name="Vector"
          d="M0,0V19.635"
          transform="translate(8.143 0.75)"
          fill="none"
          stroke="#292d32"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          opacity="0.4"
        />
      </svg>

      <div className="mt-1">
        <div className="d-flex justify-content-between">
          <label className="first-lable">{t("homeSection.modal.buyAmountModal.lables.to")}</label>
        </div>
        <div className="d-flex s-container">
          <input className="w-75" value={convertedDeve} placeholder="0" disabled />
          <div className="bnb-container d-flex bg-white justify-content-center align-items-center w-25">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="23.998"
              height="24"
              viewBox="0 0 23.998 24"
            >
              <defs>
                <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                  <stop offset="0" stop-color="#9c3fe5" />
                  <stop offset="1" stop-color="#53269f" />
                </linearGradient>
              </defs>
              <path
                id="Binance_Coin_BNB_"
                data-name="Binance Coin (BNB)"
                d="M23.638,14.9A12,12,0,1,1,14.9.359,12,12,0,0,1,23.638,14.9h0Z"
                fill="#9C3FE5"
              />
              <path
                id="logo_Converted_"
                data-name="logo [Converted]"
                d="M122.726,12.287,117.293,7.2,117.2.289h6.047A5.85,5.85,0,0,1,127.6,1.824a4.967,4.967,0,0,1,1.47,3.406l-2.14,1.1a3.719,3.719,0,0,0-.912-2.808,3.861,3.861,0,0,0-2.7-.88h-3.758l.037,3.519,3.256,3.051L129.2,5.848Z"
                transform="translate(-111.155 6.416)"
                fill="#ecedf2"
              />
            </svg>

            <span>DEVE</span>
          </div>
        </div>
      </div>
      <div className="mt-4 w-100">
        <TextItem
          title={t("homeSection.modal.buyAmountModal.price")}
          value="1"
          secondaryText="DEVE = $0.22"
          hr="true"
        />
        <TextItem
          title={t("homeSection.modal.buyAmountModal.estimatedBalance")}
          value={convertedDeve}
          symbol="&plusmn;"
          percentage="0.25%"
          hr="true"
        />
      </div>

      <div className="d-flex justify-content-between w-100">
        {currentCurrency.ticker === "BUSD" && (
          <button className="m-btns approve" disabled={isApprovedButtonLoading} onClick={handleApprove}>
            {t("homeSection.modal.buyAmountModal.btns.approve")}
          </button>
        )}
        <button
          className={`m-btns buy ${currentCurrency.ticker === "BUSD" ? "btn-buy-left " : "btn-buy-center"}`}
          disabled={isBuyButtonLoading}
          onClick={() => {
            currentCurrency.ticker === "BUSD" ? handleBuyBUSD() : handleBuy();
          }}
        >
          {buyButtonText}
        </button>
      </div>
    </section>
  );
};
export default BuyAmountModal;
