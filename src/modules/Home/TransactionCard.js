import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const TransactionCard = () => {
  const { t } = useTranslation();

   /* Generate random transactions */
   const [transaction,setTransaction] = useState(
    {
      BUSD: 10,
      DEVE: 45.5
    })
  // Transaction array
  const tArr = [
    {
      BUSD: 34,
      DEVE: 198
    },
    {
      BUSD: 56,
      DEVE: 254.8
    }
    ,{
      BUSD: 86,
      DEVE: 460
    },
    {
      BUSD: 91,
      DEVE: 500
    },
    {
      BUSD: 10,
      DEVE: 45.5
    }
  ]
  useEffect(()=>{
    let n ;
    setInterval(()=>{
      setTimeout(() => {
        n = Math.floor(Math.random() * (4 + 1))
        setTransaction(tArr[n])
      }, 3000)
    },3000)
  },[])

  return (
    <div className="t-container mt-5">
      <div >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
          <g id="vuesax_outline_tick-circle" data-name="vuesax/outline/tick-circle" transform="translate(-748 -188)">
            <g id="tick-circle" transform="translate(748 188)">
              <path id="Vector" d="M7.167,14.333a7.167,7.167,0,1,1,7.167-7.167A7.173,7.173,0,0,1,7.167,14.333ZM7.167,1a6.167,6.167,0,1,0,6.167,6.167A6.174,6.174,0,0,0,7.167,1Z" transform="translate(0.833 0.833)" fill="#48cf70"/>
              <path id="Vector-2" data-name="Vector" d="M2.385,4.778a.5.5,0,0,1-.353-.147L.145,2.745a.5.5,0,0,1,.707-.707L2.385,3.572,5.812.145a.5.5,0,0,1,.707.707l-3.78,3.78A.5.5,0,0,1,2.385,4.778Z" transform="translate(4.668 5.608)" fill="#48cf70"/>
              <path id="Vector-3" data-name="Vector" d="M0,0H16V16H0Z" fill="none" opacity="0"/>
            </g>
          </g>
        </svg>
        <span className="fs-xs t-span">{t("homeSection.exampleSection.transactionComplete")}</span>
      </div>
      <div className="fs-md equ">{transaction.BUSD} BUSD = {transaction.DEVE} DEVE</div>
      <div className="mt-3 d-flex justify-content-around">
        <h4 className="fs-xs card-text-l">
        <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" width="11.294" height="11.294" viewBox="0 0 11.294 11.294">
          <g id="vuesax_outline_card" data-name="vuesax/outline/card" transform="translate(-492 -508)" opacity="0.5">
            <g id="card" transform="translate(492 508)">
              <path id="Vector" d="M9.765.706H.353A.356.356,0,0,1,0,.353.356.356,0,0,1,.353,0H9.765a.356.356,0,0,1,.353.353A.356.356,0,0,1,9.765.706Z" transform="translate(0.588 3.647)" fill="#292d32"/>
              <path id="Vector-2" data-name="Vector" d="M1.294.706H.353A.356.356,0,0,1,0,.353.356.356,0,0,1,.353,0h.941a.356.356,0,0,1,.353.353A.356.356,0,0,1,1.294.706Z" transform="translate(2.471 7.412)" fill="#292d32"/>
              <path id="Vector-3" data-name="Vector" d="M2.235.706H.353A.356.356,0,0,1,0,.353.356.356,0,0,1,.353,0H2.235a.356.356,0,0,1,.353.353A.356.356,0,0,1,2.235.706Z" transform="translate(4.588 7.412)" fill="#292d32"/>
              <path id="Vector-4" data-name="Vector" d="M7.676,8.706H2.442C.569,8.706,0,8.141,0,6.287V2.419C0,.565.569,0,2.442,0H7.671c1.873,0,2.442.565,2.442,2.419V6.283C10.118,8.141,9.549,8.706,7.676,8.706Zm-5.233-8C.965.706.706.96.706,2.419V6.283C.706,7.741.965,8,2.442,8H7.671c1.478,0,1.737-.254,1.737-1.713V2.419C9.407.96,9.149.706,7.671.706Z" transform="translate(0.588 1.294)" fill="#292d32"/>
              <path id="Vector-5" data-name="Vector" d="M0,0H11.294V11.294H0Z" fill="none" opacity="0"/>
            </g>
          </g>
        </svg>
          <span className="me-2">0Xa6f0359.....Acaaffd12</span>
        </h4>
        <h4 className="fs-xs card-text-r">{t("homeSection.exampleSection.time")}</h4>
      </div>
    </div>
  )
}

export default TransactionCard