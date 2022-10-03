import Icons from "./Icons";
import Progress from "./Progress";
import TransactionCard from "./TransactionCard";
import ModalBuyNow from "../Modal/ModalBuyNow";
import { useTranslation } from "react-i18next";

const MainContent = ({ isOpen, setIsOpen }) => {
  const { t } = useTranslation();
  return (
    <>
      <ModalBuyNow open={isOpen} handleOpen={setIsOpen} onClose={() => setIsOpen(false)} />
      <main className="container d-flex flex-column align-items-center text-center space">
        <h1 className="text-primary pt-5">{t("homeSection.mainText")}</h1>
        <h3 className="d-none">15% of Tokens Remaining!</h3>
        <Progress />
        <h3 className="mt-3">{t("homeSection.subText")}</h3>
        <h2 className="mt-3 d-none">USDT Raised : $18,106,250.29</h2>
        <div className="mt-4">
          <button className="btn-one" onClick={() => setIsOpen(true)}>
            {t("homeSection.btns.buyNow")}
          </button>
          <button className="btn-two">{t("homeSection.btns.howToBuy")}</button>
        </div>
        <TransactionCard />
      </main>
      <Icons />
    </>
  );
};

export default MainContent;
