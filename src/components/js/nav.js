import React from 'react'

class Nav extends React.Component {
  componentDidMount() {
    const nav = document.querySelector('.nav')
    let prevScrollPos = window.pageYOffset
    window.addEventListener('scroll', detectScroll)

    function detectScroll() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        const currentScrollPos = window.pageYOffset
        nav.classList.add('nav--show')
        prevScrollPos > currentScrollPos ? nav.classList.remove('nav--hide') : nav.classList.add('nav--hide')
        prevScrollPos = currentScrollPos
      } else {
        nav.classList.remove('nav--hide')
        nav.classList.remove('nav--show')
      }
    }
  }



  render() {
    return (
      <div className="nav">

        <ul className="nav__list">
          <li className="nav__list-item">
            <a className="nav__link nav__link--effect nav__link--blue" href="mailto:michaelsimmonds1992@gmail.com">
              <img className="nav__icon" src="./assets/icons/email.svg"/><span>michaelsimmonds1992@gmail.com</span>
            </a>
          </li>
          <li className="nav__list-item">
            <a className="nav__link nav__link--effect nav__link--yellow" href="https://github.com/michaelsimmonds" target="_blank">
              <img className="nav__icon" src="./assets/icons/github.svg"/><span>github.com/michaelsimmonds</span>
            </a>
          </li>
          <li className="nav__list-item">
            <a className="nav__link nav__link--effect nav__link--red" href="https://www.linkedin.com/in/michaelsimmonds1992/" target="_blank" >
              <img className="nav__icon" src="./assets/icons/linkedin.svg"/><span>linkedin.com/in/michaelsimmonds1992</span>
            </a>
          </li>
        </ul>

      </div>
    )
  }
}

export default Nav
