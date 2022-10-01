import Icons from "./Icons"
import Progress from "./Progress"
import TransactionCard from "./TransactionCard"
import { ModalBuyNow } from "./Modal/ModalBuyNow"
import { useState } from "react"
const MainContent = () => {
  const [isOpen,setIsOpen]=useState(false)
  return (
    <>
    <ModalBuyNow open={isOpen} onClose={()=>setIsOpen(false)}/>
    <main className="container d-flex flex-column align-items-center text-center space">
      <h1 className="text-primary pt-5">IDO Has Started!</h1>
      <h3 className="d-none">15% of Tokens Remaining!</h3>
      <Progress/>
      <h3 className="mt-3">100% of Tokens Remaining!</h3>
      <h2 className="mt-3 d-none">USDT Raised : $18,106,250.29</h2>
      <div className="mt-4">
        <button className="btn-one" onClick={()=>setIsOpen(true)}>Buy Now</button>
        <button className="btn-two">How to Buy?</button>
      </div>
      <TransactionCard/>
    </main>
    <Icons/>
    </>
  )
}

export default MainContent