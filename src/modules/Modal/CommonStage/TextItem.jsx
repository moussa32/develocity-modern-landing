import React from "react";
import styles from "./CommonStyle.module.css";

const TextItem = ({ title, secondaryText, value, percentage, hr, symbol }) => {
  return (
    <>
      <div class={styles.TextLine}>
        <h6>{title}:</h6>
        <p>
          {value} {secondaryText ? secondaryText : "DEVE"}
          {!percentage && (
            <span className="ms-1">
              ({symbol ? symbol : "~$"} {percentage})
            </span>
          )}
        </p>
      </div>
      {hr && <hr />}
    </>
  );
};

export default TextItem;
