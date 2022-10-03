import React from 'react'
import { useState, useCallback } from 'react';
import { ModalHeaderText } from '../ModalHeader/ModalHeaderText';
import binanceUSD from '../../../assets/images/bscCoin.svg';
import binanceCoin from '../../../assets/images/BinanceUSD.png';
import TextFloatRight from '../CommonStage/TextFloatRight';
import ButtonItem from "..//CommonStage/ButtonItem";

export default function BuywithModal({ handleStep }) {
    const [selectedNetwork, setSelectedNetwork] = useState("");


    const handleSelectNetworkName = useCallback((name) => {
        handleStep("buyamount")
        setSelectedNetwork(name);
    }, [handleStep]);
    return (
        <>
            <div>
                <ModalHeaderText header="Buying With" caption="Select The Cryptocurrency You Want To Use" />
                <TextFloatRight balanceValue="567.29" />
                <ButtonItem
                    mainText="Binance Coin"
                    secondaryText="BNB"
                    image={binanceCoin}
                    selected={selectedNetwork}
                    handleSelect={handleSelectNetworkName}
                />
                <TextFloatRight balanceValue="2,914.0594" />
                <ButtonItem
                    mainText="Binance USD"
                    secondaryText="BUSD"
                    image={binanceUSD}
                    selected={selectedNetwork}
                    handleSelect={handleSelectNetworkName}
                />

            </div>

        </>
    )
}


