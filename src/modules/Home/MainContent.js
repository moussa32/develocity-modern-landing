import "../../styles/MainContent.scss"
import Icons from "./Icons"
import Progress from "./Progress"
import TransactionCard from "./TransactionCard"

const MainContent = () => {
  return (
    <main className="container text-center space">
      <h1 className="text-primary fs-3xl pt-5">Last Presale Phase!</h1>
      <h3 className="fs-2xl">15% of Tokens Remaining!</h3>
      <Progress/>
      <h2 className="mt-2 fs-lg">USDT Raised : $18,106,250.29</h2>
      <button className="btn-one fs-md">Buy Now</button>
      <button className="btn-two fs-md">How to Buy?</button>
      <TransactionCard/>
      <Icons/>

    </main>
  )
}

export default MainContent