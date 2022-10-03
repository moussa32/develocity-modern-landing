import React from "react";
import styles from "./CommonStyle.module.css";

const TextItem = ({ title, secondaryText, value, percentage, hr }) => {
  return (
    <>
      <div class={styles.TextLine}>
        <h6>{title}:</h6>
        {value && (
          <p>
            {value} {secondaryText ? secondaryText : "DEVE"}
            {percentage && <span className="ms-1">(~$ {percentage})</span>}
          </p>
        )}
      </div>
      {hr && <hr />}
    </>
  );
};

export default TextItem;
