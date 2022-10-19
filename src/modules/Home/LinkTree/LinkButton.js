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
  const handleScroll = event => {
    // console.log('offsetHeight: ', event.currentTarget.offsetHeight);
    if (event.currentTarget.scrollLeft > 1) {
      setActiveTouchElement(event.target.dataset.title)
    }
    else {
      setActiveTouchElement(null)
    }

  };
  return (
    <>
      <div
        onScroll={handleScroll}
        // onTouchStart={onTouchMove}
        // onTouchEnd={TouchEnd}
        // onTouchCancel={TouchEnd}
        data-title={title}
        className={`${styles['link-wrapper']}
         ${activeTouchElement === title && styles.linksInMobile}  
        ${activeTouchElement !== title && styles.removeShareButton}
        `} 
        >
        <div className={styles.swapContainer}>
          <button className={`${styles.btn_title} `}
            onClick={goToLink}
          >
            {title}
          </button>
          <div>
            <button className={styles['link-btnShare']}
              onClick={() => shareNavigator(textofshare, titleofshare, urlofshare)}>
              <ShareIcon color='#fff' />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
