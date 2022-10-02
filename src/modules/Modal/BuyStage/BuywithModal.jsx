import React from 'react'
import { ModalHeaderText } from '../ModalHeader/ModalHeaderText';
import TextFloatRight from '../CommonStage/TextFloatRight';
export default function BuywithModal() {
  return (
    <div>
         <ModalHeaderText header="Buying With" caption="Select The Cryptocurrency You Want To Use" />
        <TextFloatRight  balanceValue="567.29"/>
    </div>
  )
}
