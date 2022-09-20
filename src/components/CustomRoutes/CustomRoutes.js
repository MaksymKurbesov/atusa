import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Main from '../../pages/Main/Main'
import Events from '../../pages/Events/Events'
import Event from '../../pages/Event/Event'
import News from '../../pages/News/News'
import Music from '../../pages/Music/Music'
import React from 'react'

const CustomRoutes = () => {
  const location = useLocation()

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:eventId" element={<Event />} />
        <Route path="/news" element={<News />} />
        <Route path="/music" element={<Music />} />
      </Route>
    </Routes>
  )
}

export default CustomRoutes
