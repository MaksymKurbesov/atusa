import styles from './LastNews.module.css'
import ParallaxText from '../ParallaxText/ParallaxText'
import { NEWS } from '../../db/db'

const LastNews = () => {
  return (
    <div className={styles.lastNews}>
      <div className={styles.parallaxWrapper}>
        <ParallaxText baseVelocity={-5}>Останні новини</ParallaxText>
      </div>
      <div className={`container`}>
        <ul>
          {NEWS.map((news, i) => {
            return (
              <li key={i}>
                <img
                  src={news.image}
                  width={'100%'}
                  height={200}
                  alt={'обложка новости'}
                />
                <h3>{news.title}</h3>
                <p>{news.description}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default LastNews
