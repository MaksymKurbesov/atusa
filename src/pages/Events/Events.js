import styles from './Events.module.css'
import { NavLink } from 'react-router-dom'
import { EVENTS } from '../../db/db'

const Events = () => {
  return (
    <div className={'container'}>
      <ul className={styles.eventsList}>
        {EVENTS.map((event, i) => {
          return (
            <li key={i}>
              <NavLink className={styles.eventLink} to={event.path}>
                <img src={event.image} width={300} height={300} alt={''} />
                <p>{event.name}</p>
              </NavLink>
            </li>
          )
        })}
      </ul>
      {/*<button className={styles.showMoreButton}>Показать ще</button>*/}
    </div>
  )
}

export default Events
