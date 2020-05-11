import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

const Contact = () => {
  return (
    <div className="contact container module-padding">

      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <h2 className="projects__title heading">Contact</h2>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <ul className="nav__list">
          <li className="nav__list-item">
            <a className="nav__link nav__link--effect nav__link--blue" href="mailto:michaelsimmonds1992@gmail.com">
              <img className="nav__icon" src="./assets/icons/email.svg"/><span>michaelsimmonds1992@gmail.com</span>
            </a>
          </li>
          <li className="nav__list-item">
            <a className="nav__link nav__link--effect nav__link--yellow" href="https://github.com/michaelsimmonds" target="_blank" rel="noopener noreferrer">
              <img className="nav__icon" src="./assets/icons/github.svg"/><span>github.com/michaelsimmonds</span>
            </a>
          </li>
          <li className="nav__list-item">
            <a className="nav__link nav__link--effect nav__link--red" href="https://www.linkedin.com/in/michaelsimmonds1992/" target="_blank" rel="noopener noreferrer">
              <img className="nav__icon" src="./assets/icons/linkedin.svg"/><span>linkedin.com/in/michaelsimmonds1992</span>
            </a>
          </li>
        </ul>
      </ScrollAnimation>

    </div>
  )
}

export default Contact
