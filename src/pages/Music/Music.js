import styles from './Music.module.css'
import { MUSIC } from '../../db/db'

const Music = () => {
  return (
    <section className={styles.music}>
      <div className={'container'}>
        <ul>
          {MUSIC.map((track, index) => {
            return (
              <li key={index}>
                <img
                  src={track.cover}
                  alt={`Обложка композиции`}
                  width={'100%'}
                />
                <p>{track.name}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Music
