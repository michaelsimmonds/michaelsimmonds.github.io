import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import {  Chai, Express, Flask, Git, Html, JavaScript, Mocha, Mongodb, Nodejs, Nuxtjs, PostgreSQL, Python, ReactSVG, Sass, TypeScript, Vue, Webpack} from '../images.js'

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
              <img className="software__icon" src={Html}/>
            </li>
            <li className="software__list-item">
              <img className="software__icon" src={Sass}/>
            </li>
            <li className="software__list-item">
              <img className="software__icon" src={JavaScript}/>
            </li>
            <li className="software__list-item">
              <img className="software__icon" src={TypeScript}/>
            </li>
            <li className="software__list-item">
              <img className="software__icon software__icon--nuxt" src={Nuxtjs}/>
            </li>
            <li className="software__list-item">
              <img className="software__icon" src={Vue}/>
            </li>
            <li className="software__list-item">
              <img className="software__icon" src={ReactSVG}/>
            </li>
            <li className="software__list-item">
              <img className="software__icon software__icon--git" src={Git}/>
            </li>
          </ul>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <h3 className="software__subheading">Have experience with</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <ul className="software__list">
            <li className="software__list-item">
              <img className="software__icon" src={Python}/>
            </li>
            <li className="software__list-item">
              <img className="software__icon" src={Nodejs}/>
            </li>
            <li className="software__list-item">
              <img className="software__icon" src={Mongodb}/>
            </li>
            <li className="software__list-item">
              <img className="software__icon" src={PostgreSQL}/>
            </li>
            <li className="software__list-item">
              <img className="software__icon" src={Express}/>
            </li>
            <li className="software__list-item">
              <img className="software__icon" src={Flask}/>
            </li>
            <li className="software__list-item">
              <img className="software__icon" src={Mocha}/>
            </li>
            <li className="software__list-item">
              <img className="software__icon software__icon--chai" src={Chai}/>
            </li>
            <li className="software__list-item">
              <img className="software__icon" src={Webpack}/>
            </li>
          </ul>
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default Software
