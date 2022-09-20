import styles from "./Music.module.css";
import MusicCover1 from "../../assets/images/vinyl1.png";
import MusicCover2 from "../../assets/images/vinyl2.png";
import MusicCover3 from "../../assets/images/vinyl3.png";
import MusicCover4 from "../../assets/images/vinyl4.png";
import { motion, useInView, useAnimation } from "framer-motion";
import ParallaxText from "../ParallaxText/ParallaxText";
import { useEffect, useRef } from "react";

const MUSIC_COVERS = [MusicCover1, MusicCover2, MusicCover3, MusicCover4];

const Music = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start({
        opacity: 1,
        translateY: 0,
      });
    }
  }, [isInView]);

  return (
    <div className={styles.music} ref={ref}>
      <div className={styles.parallaxWrapper}>
        <ParallaxText baseVelocity={5}>нова Музика</ParallaxText>
      </div>
      <div className={`container`}>
        <ul>
          {MUSIC_COVERS.map((cover, i) => {
            return (
              <motion.li
                initial={{
                  opacity: 0,
                  translateY: 10,
                }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.2,
                }}
                animate={animation}
                key={i}
              >
                <img src={cover} alt={`Обложка композиции`} width={350} />
              </motion.li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Music;
