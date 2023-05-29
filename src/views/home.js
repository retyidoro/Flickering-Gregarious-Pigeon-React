import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Flickering Gregarious Pigeon</title>
        <meta property="og:title" content="Flickering Gregarious Pigeon" />
      </Helmet>
      <h1>Heading</h1>
      <img
        alt="image"
        src="/aaa/screenshot%202023-04-28%20at%2011.04.05-200w.png"
        className="home-image"
      />
      <img alt="image" src="/aaa/airplane-200h.jpg" className="home-image1" />
      <img
        alt="image"
        src="/aaa/hibiscus-fav2-200h.png"
        className="home-image2"
      />
    </div>
  )
}

export default Home
