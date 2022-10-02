import React from 'react'

export default function NextButton({ handleStep }) {
    return (
        <div>
            <button type="button" className="nextBtn2"  onClick={handleStep}>Next<i class="bi bi-arrow-right"></i></button>
        </div>
    )
}

// #nextBtn2{
//     width: 220px;
//     height: 54px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     color: #fff;
//     background-color: #0D162A;
//     border-radius: 6px;
//     margin:20px auto 0;
//     font-size: 16px;
//   }
