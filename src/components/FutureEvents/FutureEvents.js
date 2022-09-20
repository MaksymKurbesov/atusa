import styles from "./FutureEvents.module.css";
import FutureEventImg1 from "../../assets/images/ticket1.png";
import FutureEventImg2 from "../../assets/images/ticket2.png";
import FutureEventImg3 from "../../assets/images/ticket3.png";
import FutureEventImg4 from "../../assets/images/ticket4.png";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ParallaxText from "../ParallaxText/ParallaxText";

const images = [
  FutureEventImg1,
  FutureEventImg2,
  FutureEventImg3,
  FutureEventImg4,
  FutureEventImg1,
  FutureEventImg2,
  FutureEventImg3,
  FutureEventImg4,
];

const FutureEvents = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className={styles.futureEvents}>
      <div className={styles.parallaxWrapper}>
        <ParallaxText baseVelocity={-5}>майбутні події</ParallaxText>
      </div>
      <div className={`container`}>
        <motion.div className={styles.carousel}>
          <motion.ul
            ref={carousel}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {images.map((image, index) => {
              return (
                <li key={index}>
                  <img src={image} width={600} alt={`Будущее первое событие`} />
                </li>
              );
            })}
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

export default FutureEvents;
