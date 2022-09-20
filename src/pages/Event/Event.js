import React from 'react'
import { useParams } from 'react-router-dom'
import { EVENTS } from '../../db/db'
import styles from './Event.module.css'

const Event = () => {
  const params = useParams()
  const currentEvent = EVENTS.find((event) => event.path === params.eventId)

  return (
    <div className={`container ${styles.eventWrapper}`}>
      <img
        src={currentEvent.image}
        width={600}
        height={600}
        alt={'обложка события'}
      />
      <div className={styles.eventInfo}>
        <span>Що</span>
        <p>{currentEvent.name}</p>
        <span>Де</span>
        <p>{currentEvent.address}</p>
        <span>Коли</span>
        <p>{currentEvent.date}</p>
      </div>
    </div>
  )
}

export default Event
