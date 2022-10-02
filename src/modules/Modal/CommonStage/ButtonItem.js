import { memo, useState } from "react";

const ButtonItem = ({ selected, handleSelect, image, mainText, secondaryText, doubleCallbackFunc }) => {
  const handleClick = (event) => {
    handleSelect(mainText);
    // if (event.detail === 2) {
    //   console.log("double click");
    //   console.log(doubleCallbackFunc);
    //   doubleCallbackFunc(mainText);
    // }
  };

  return (
    <div className={`d-flex button-item-wrapper ${selected === mainText && "active"}`} onClick={handleClick}>
      <img className="button-item-image" src={image} alt="image_alt" title="asadas" />
      <div className="d-flex justify-content-center flex-column">
        <p className="text-capitalize mb-0 fs-md">{mainText}</p>
        {secondaryText && <p className="text-uppercase mb-0 text-body-text text-opacity-75">{secondaryText}</p>}
      </div>
    </div>
  );
};

export default memo(ButtonItem);
