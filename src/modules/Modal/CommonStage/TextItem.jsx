import React from "react";
import styles from "./CommonStyle.module.css";
import ContentLoader from "react-content-loader";

const TextItem = ({ title, secondaryText, value, percentage, hr, symbol, isLoaded }) => {
  const renderValues = () => {
    if (!isLoaded) {
      return (
        <ContentLoader
          viewBox="0 0 400 40"
          backgroundColor="#d9d9d9"
          foregroundColor="#ecebeb"
          style={{ width: "150px" }}
        >
          <rect x="15" y="0" rx="4" ry="4" height="30" style={{ width: "100%" }} />
        </ContentLoader>
      );
    } else {
      return (
        <p>
          {value ? value : null} {secondaryText ? secondaryText : "DEVE"}
          {percentage && (
            <span className="ms-1">
              ({symbol ? symbol : "~$"} {percentage})
            </span>
          )}
        </p>
      );
    }
  };

  return (
    <>
      <div class={styles.TextLine}>
        <h6>{title}:</h6>
        {renderValues()}
      </div>
      {hr && <hr />}
    </>
  );
};

export default TextItem;
