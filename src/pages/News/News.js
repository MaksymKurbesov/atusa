import styles from './News.module.css'
import NewsImage1 from '../../assets/images/last-news1.png'
import NewsImage2 from '../../assets/images/last-news2.png'

const images = [
  NewsImage1,
  NewsImage2,
  NewsImage1,
  NewsImage2,
  NewsImage1,
  NewsImage2,
]

const News = () => {
  return (
    <section className={styles.news}>
      <div className={'container'}>
        <ul className={styles.newsList}>
          {images.map((image, i) => {
            return (
              <li key={i}>
                <img
                  src={image}
                  alt={'Обложка новости'}
                  width={'100%'}
                  height={335}
                />
                <p className={styles.date}>29 серпня</p>
                <h3>Portraits повертається!</h3>
                <p>
                  11.09 — 18:00-06:00, Kureni 11 вересня qievdance & CHI знову
                  об’єднаються аби влаштувати
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default News
