import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

const Intro = () => {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <div className="about module-padding module-padding--no-top">
        <div className="container">
          <h2 className="about__title heading">About</h2>
          <div className="about__content-wrapper">
            <figure className="about__image-wrapper">
              <img src="./assets/me.JPG" alt="me" id="me" className="about__image"/>
            </figure>
            <div className="about__text-wrapper text--body">
              <p>Hi, I'm Michael.</p>
              <p>I'm a web developer who's been working for the last year at a strategic design and technology agency which specialises in luxury travel, hospitality and retail. I've been working on various frontend builds, predominently using Vue.js, TypeScript, Nuxt.js and JavaScript, in projects spaning all areas of the business to deliver high quality work which suits the needs of the client.</p>
              <p>Check out my personal projects below and if you'd like to ask me anything or get in contact for whatever reason, reach out to me on the details provided at the bottom of the page.</p>
              <p>Hope to hear from you soon!</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  )
}

export default Intro
