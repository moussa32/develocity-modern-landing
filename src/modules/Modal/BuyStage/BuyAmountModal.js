import { useEffect, useMemo, useState } from "react";
import TextItem from "../CommonStage/TextItem";
import toast from "react-hot-toast";
import { ethers } from "ethers";
import contractAbi from "../../../assets/contractABI.json";

let walletInfoContractAddress = "0xc1ec20ef71c47004616a7c82ce0dd6a60fbe897c";

const BuyAmountModal = ({ handleStep, walletAddress, disconnect, currentCurrency }) => {
  const [coinBalance, setCoinBalance] = useState(0);
  const [convertedDeve, setConvertedDeve] = useState(0);

  const memoizedCoinBalanceConverted = useMemo(() => (coinBalance * Math.pow(10, 18)).toString(), [coinBalance]);

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const walletInfoContract = new ethers.Contract(walletInfoContractAddress, contractAbi, provider);

    const delayDebounceFn = setTimeout(async () => {
      if (coinBalance > 0) {
        const calculateDeveCoins = await walletInfoContract.getwethPrice(memoizedCoinBalanceConverted);
        setConvertedDeve(calculateDeveCoins.toLocaleString("en-US"));
      }
    }, 500);

    return () => {
      clearTimeout(delayDebounceFn);
    };
  }, [coinBalance]);

  const handleBuy = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(walletInfoContractAddress, contractAbi, signer);
    const urlParams = new URLSearchParams(window.location.search);
    const ref = urlParams.get("ref");
    console.log(ref);

    const gasPrice = await contract.estimateGas.buyTokens(ref, { value: memoizedCoinBalanceConverted });

    const buyRequest = await contract
      .buyTokens(ref, { value: memoizedCoinBalanceConverted, gasPrice: gasPrice })
      .then((res) => {
        handleStep("final");
      })
      .catch((error) => {
        console.log(error);
      });

    // handleStep("final");
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
          <label className="first-lable">From</label>
          <h5 className="second-lable">Balance: {currentCurrency.balance} </h5>
        </div>
        <div className="d-flex s-container">
          <input
            className="w-75"
            value={coinBalance}
            type="number"
            onChange={(e) => {
              if (e.target.value < 1000) {
                setCoinBalance(e.target.value);
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
          <label className="first-lable">To</label>
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
        <TextItem title={"Price"} value="1" secondaryText="DEVE = $0.22" hr="true" />
        <TextItem title={"Estimate Balance"} value={convertedDeve} symbol="&plusmn;" percentage="0.25%" hr="true" />
      </div>

      <div className="d-flex justify-content-between w-100">
        <button className="m-btns buy mx-auto" onClick={handleBuy}>
          Buy →
        </button>
      </div>
    </section>
  );
};
export default BuyAmountModal;
