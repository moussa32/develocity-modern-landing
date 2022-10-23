import React, { useEffect, useState ,useRef} from 'react'
import styles from './LinkTree.module.css'
import ShareIcon from './ShareIcon';

export default function LinkButton({ title, shareNavigator, titleofshare, textofshare, urlofshare }) {
  const [activeTouchElement, setActiveTouchElement] = useState(null);
  const ref = useRef(null);
  // const onTouchMove = (e) => {
  //   setActiveTouchElement(e.target.innerHTML)
  // };
  // const TouchEnd = (e) => {
  //   e.preventDefault()
  //   setActiveTouchElement(null)
  // };
useEffect(()=>{
  if(activeTouchElement===null){
    ref.current.scrollLeft=0
    }
  // console.log("activeTouchElement: ",ref.current)
} ,[activeTouchElement])

  const goToLink = () => {
    // eslint-disable-next-line no-restricted-globals
    location.href = `https://bscscan.com`
  }
  const handleScroll = event => {
    if (event.currentTarget.scrollLeft > 1) {
      setActiveTouchElement(event.target.dataset.title)
    }
    else {
      setActiveTouchElement(null)
      // event.currentTarget.scrollLeft=0
    }
  };
 
  return (
    <>
      <div
        onScroll={handleScroll}
        onClick={goToLink}
        ref={ref}
        // onTouchStart={onTouchMove}
        // onTouchEnd={TouchEnd}
        // onTouchCancel={TouchEnd}
        data-title={title}
        className={`${styles['link-wrapper']}
         ${activeTouchElement === title && styles.linksInMobile}  
        ${activeTouchElement !== title && styles.removeShareButton}
        `} 
        >
        <div className={styles.swapContainer} >
          <button className={`${styles.btn_title} `}
            
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
