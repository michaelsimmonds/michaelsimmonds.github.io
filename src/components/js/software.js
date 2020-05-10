import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

const Software = () => {
  return (
    <div className="software module-padding">
      <div className="software__wrapper">

        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <h2 className="heading">Software</h2>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <h3 className="software__subheading">Proficient with</h3>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <ul className="software__list">
            <li className="software__list-item">
              <img className="software__icon" src="./assets/icons/html.svg"/>
            </li>
            <li className="software__list-item">
              <img className="software__icon" src="./assets/icons/sass-1.svg"/>
            </li>
            <li className="software__list-item">
              <img className="software__icon" src="./assets/icons/javascript.svg"/>
            </li>
            <li className="software__list-item">
              <img className="software__icon" src="./assets/icons/typescript.svg"/>
            </li>
            <li className="software__list-item">
              <img className="software__icon software__icon--nuxt" src="./assets/icons/nuxt.svg"/>
            </li>
            <li className="software__list-item">
              <img className="software__icon" src="./assets/icons/vue-js-1.svg"/>
            </li>
            <li className="software__list-item">
              <img className="software__icon" src="./assets/icons/react.svg"/>
            </li>
            <li className="software__list-item">
              <img className="software__icon software__icon--git" src="./assets/icons/git.svg"/>
            </li>
          </ul>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <h3 className="software__subheading">Have experience with</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <ul className="software__list">
            <li className="software__list-item">
              <img className="software__icon" src="./assets/icons/python-4.svg"/>
            </li>
            <li className="software__list-item">
              <img className="software__icon" src="./assets/icons/nodejs.svg"/>
            </li>
            <li className="software__list-item">
              <img className="software__icon" src="./assets/icons/mongodb.svg"/>
            </li>
            <li className="software__list-item">
              <img className="software__icon" src="./assets/icons/postgresql.svg"/>
            </li>
            <li className="software__list-item">
              <img className="software__icon" src="./assets/icons/express-109.svg"/>
            </li>
            <li className="software__list-item">
              <img className="software__icon" src="./assets/icons/flask.svg"/>
            </li>
            <li className="software__list-item">
              <img className="software__icon" src="./assets/icons/mocha-1.svg"/>
            </li>
            <li className="software__list-item">
              <img className="software__icon software__icon--chai" src="./assets/icons/chai.svg"/>
            </li>
            <li className="software__list-item">
              <img className="software__icon" src="./assets/icons/webpack-icon.svg"/>
            </li>
          </ul>
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default Software
