import styles from './LastEvents.module.css'
import LastEventImg1 from '../../assets/images/last1.png'
import LastEventImg2 from '../../assets/images/last2.png'
import LastEventImg3 from '../../assets/images/last3.png'
import LastEventImg4 from '../../assets/images/last4.png'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ParallaxText from '../ParallaxText/ParallaxText'

const images = [
  LastEventImg1,
  LastEventImg2,
  LastEventImg3,
  LastEventImg4,
  LastEventImg1,
  LastEventImg2,
  LastEventImg3,
  LastEventImg4,
]

const LastEvents = () => {
  const [width, setWidth] = useState(0)
  const carousel = useRef()

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  return (
    <div className={styles.lastEvents}>
      <div className={styles.parallaxWrapper}>
        <ParallaxText baseVelocity={5}>Минулі події</ParallaxText>
      </div>
      <div className={`container`}>
        <motion.div ref={carousel} className={styles.carousel}>
          <motion.ul drag="x" dragConstraints={{ right: 0, left: -width }}>
            {images.map((image, index) => {
              return (
                <li key={index}>
                  <img src={image} alt={`Прошлое событие`} width={600} />
                </li>
              )
            })}
          </motion.ul>
        </motion.div>
      </div>
    </div>
  )
}

export default LastEvents
