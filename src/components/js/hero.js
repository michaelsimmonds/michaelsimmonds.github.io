import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

const Hero = () => {
  return (
    <div className="hero container">

      <ScrollAnimation animateIn="fadeIn" offset={0} duration={3} animateOnce={true}>
        <figure className="hero__image-wrapper">
          <img src="./assets/images/shapes.jpeg" className="hero__image" alt="shapes"/>
        </figure>
      </ScrollAnimation>

      <div className="hero__text-box">
        <ScrollAnimation animateIn="triggerFadeIn" animateOnce={true}>
          <h1 className="hero__title">Michael Simmonds</h1>
          <h2 className="hero__subtitle">Web Developer</h2>
        </ScrollAnimation>
      </div>

    </div>
  )
}

export default Hero
