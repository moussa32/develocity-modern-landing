import React, { useState } from 'react'
import styles from './LinkTree.module.css'
import ShareIcon from './ShareIcon';

export default function LinkButton({ title, shareNavigator, titleofshare, textofshare, urlofshare }) {
  const [touch, setTouch] = useState();
  const onTouchMove = (e) => {
    setTouch(e.target.innerHTML)
    console.log('move:', touch);
  };
  const TouchEnd = () => {
    setTouch(null)
    console.log('end', touch);
  };
  const goToLink = () => {
    // eslint-disable-next-line no-restricted-globals
    location.href = `https://bscscan.com`
  }

  return (
    <>
      <div
        className={`${styles['link-wrapper']} ${touch===title && styles.linksInMobile}  `} >
        <button className={`${styles.btn_title} `}
          onClick={goToLink}
          onTouchMove={onTouchMove}
          onTouchEnd={TouchEnd}
          onTouchCancel={TouchEnd}
          >
          {title}
        </button>
        <div>
          <button className={styles['link-btnShare']}
            onClick={() => shareNavigator(textofshare, titleofshare, urlofshare)}
          >
            <ShareIcon color='#fff' />
          </button>
        </div>
      </div>
    </>
  )
}
