import React, { useState } from 'react'
import styles from './LinkTree.module.css'
import ShareIcon from './ShareIcon';

export default function LinkButton({ title, shareNavigator, titleofshare, textofshare, urlofshare }) {
  const [activeTouchElement, setActiveTouchElement] = useState(null);
  const onTouchMove = (e) => {
    setActiveTouchElement(e.target.innerHTML)
    // console.log('move:', touch);
  };
  // const TouchEnd = (e) => {
  //   e.preventDefault()
  //   setActiveTouchElement(null)
  // };

  const goToLink = () => {
    // eslint-disable-next-line no-restricted-globals
    location.href = `https://bscscan.com`
  }

  return (
    <>
      <div
      onTouchStart={onTouchMove}
      // onTouchEnd={TouchEnd}
      // onTouchCancel={TouchEnd}
        className={`${styles['link-wrapper']} ${activeTouchElement===title && styles.linksInMobile}  
        ${activeTouchElement !== title && styles.removeShareButton}
        `} >
        <button className={`${styles.btn_title} `}
          onClick={goToLink}
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
