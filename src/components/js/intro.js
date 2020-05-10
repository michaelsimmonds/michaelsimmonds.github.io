import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'
import Splitting from 'splitting'

class Intro extends React.Component {
  componentDidMount() {
    Splitting({
      target: '[data-splitting]',
      by: 'words',
      key: null
    })
  }

  render() {
    return (
      <ScrollAnimation animateIn="triggerSplitting" animateOnce={true}>
        <div className="about module-padding module-padding--no-top">
          <div className="container">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <h2 className="about__title heading">About</h2>
            </ScrollAnimation>

            <div className="about__content-wrapper">
              <figure className="about__image-wrapper">
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                  <img src="./assets/me.JPG" alt="me" id="me" className="about__image"/>
                </ScrollAnimation>
              </figure>

              <div className="about__text-wrapper text--body" data-splitting>
                <p>Hi, I&apos;m Michael.</p>
                <p>I&apos;m a web developer who&apos;s been working for the last year at a strategic design and technology agency which specialises in luxury travel, hospitality and retail. I&apos;ve been working on various frontend builds, predominently using Vue.js, TypeScript, Nuxt.js and JavaScript, in projects spaning all areas of the business to deliver high quality work which suits the needs of the client.</p>
                <p>Check out my personal projects below and if you&apos;d like to ask me anything or get in contact for whatever reason, reach out to me on the details provided at the bottom of the page.</p>
                <p>Hope to hear from you soon!</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    )
  }
}

export default Intro
