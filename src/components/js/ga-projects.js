import React from 'react'
import Swiper from 'swiper'
import ScrollAnimation from 'react-animate-on-scroll'

import {Barlevard, Travel, Hackathon, Invaders, Chevron} from '../images.js'

class GaProjects extends React.Component {
  componentDidMount() {
    new Swiper('.swiper-container', {
      direction: 'horizontal',
      slidesPerView: 1,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      renderFraction: function (currentClass, totalClass) {
        return '<span className="' + currentClass + '"></span>' +
                ' of ' +
                '<span className="' + totalClass + '"></span>'
      }
    })
  }

  render() {
    return (
      <div className="projects module-padding">
        <div className="container">

          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <h2 className="projects__title heading">General Assembly Projects</h2>
          </ScrollAnimation>

          <div className="swiper-container">
            <div className="swiper-wrapper">

              <div className="swiper-slide">
                <div className="projects__content-wrapper">
                  <div className="projects__top-wrapper projects__top-wrapper--invert">
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                      <h3 className="subheading projects__project-title projects__project-title--invert">Space Invaders</h3>
                      <p className="text--body">This week-long project was the first I completed at General Assembly. In this remake of the classic 80s arcade game, the player aims to shoot as many aliens as possible before running out of lives or the aliens invade. Each wave gets harder and harder, with the aliens moving faster and shooting more frequently. Why not give it a go??</p>
                    </ScrollAnimation>
                  </div>
                  <div className="projects__body-wrapper projects__body-wrapper--invert">
                    <div className="projects__image-wrapper">
                      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <img src={Invaders} alt="game gif" className="projects__image"/>
                      </ScrollAnimation>
                    </div>
                    <div className="projects__text-wrapper projects__text-wrapper--invert">
                      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <h3 className="subheading subheading--small">Software:</h3>
                        <p  className="text--body">Vanilla JavaScript, HTML, CSS.</p>
                      </ScrollAnimation>

                      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <div className="projects__cta-wrapper">
                          <a href="https://github.com/michaelsimmonds/WDI-Project-01" target="_blank" rel="noopener noreferrer" className="cta cta-fill cta-fill--bar projects__cta">
                            <span>See the Code</span>
                          </a>
                          <a href="http://michaelsimmonds.me/WDI-Project-01/" target="_blank" rel="noopener noreferrer" className="cta cta-fill cta-fill--bar projects__cta"><span>Play the Game</span></a>
                        </div>
                      </ScrollAnimation>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="projects__content-wrapper">
                  <div className="projects__top-wrapper projects__top-wrapper--invert">
                    <h3 className="subheading projects__project-title projects__project-title--invert">Comedy Night Hackathon</h3>
                    <p className="text--body">In this two day pair project we used an external API to gather information about comedy nights in London. The user can search for a specific night or just browse what London has to offer. Events are displayed with an accompanying map showing its location and a link to the ticket office.</p>
                  </div>
                  <div className="projects__body-wrapper projects__body-wrapper--invert">
                    <div className="projects__image-wrapper">
                      <img src={Hackathon} alt="game gif" className="projects__image"/>
                    </div>
                    <div className="projects__text-wrapper projects__text-wrapper--invert">
                      <h3 className="subheading subheading--small">Software:</h3>
                      <p  className="text--body">React, Axios, JavaScript, CSS, Bulma.</p>
                      <div className="projects__cta-wrapper">
                        <a href="https://github.com/michaelsimmonds/WDI-Project-02-Hackathon" target="_blank" rel="noopener noreferrer" className="cta cta-fill cta-fill--bar projects__cta"><span>See the Code</span></a>
                        <a href="https://react-comedynight-hackathon.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="cta cta-fill cta-fill--bar projects__cta"><span>Visit the Site</span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="projects__content-wrapper">
                  <div className="projects__top-wrapper projects__top-wrapper--invert">
                    <h3 className="subheading projects__project-title projects__project-title--invert">Explore Travel</h3>
                    <p className="text--body">For this five day group project, we built a full-stack application to plan and display a round-the-world trip. Users can browse the famous sites that are included in our database and add them to their dashboard. They can then visualise their trip on their dashboard&apos;s map and change the order of their journey using a React drag-and-drop feature. I focussed on the backend for this project whilst my teammates worked on the frontend and the dashboard component respectively.</p>
                  </div>
                  <div className="projects__body-wrapper projects__body-wrapper--invert">
                    <div className="projects__image-wrapper">
                      <img src={Travel} alt="game gif" className="projects__image"/>
                    </div>
                    <div className="projects__text-wrapper projects__text-wrapper--invert">
                      <h3 className="subheading subheading--small">Software:</h3>
                      <p  className="text--body">React, JavaScript, CSS, Bulma, MongoDB, Mongoose, Express, Axios, Mocha, Chai, Webpack.</p>
                      <div className="projects__cta-wrapper">
                        <a href="https://github.com/michaelsimmonds/WDI-Project-03-Explore-Travel" target="_blank" rel="noopener noreferrer" className="cta cta-fill cta-fill--bar projects__cta"><span>See the Code</span></a>
                        <a href="https://explore-travel.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="cta cta-fill cta-fill--bar projects__cta"><span>Visit the Site</span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="projects__content-wrapper">
                  <div className="projects__top-wrapper projects__top-wrapper--invert">
                    <h3 className="subheading projects__project-title projects__project-title--invert">Sunset Barlevard</h3>
                    <p className="text--body">In this week-long group project we created an app which enables users to create and display their own bar crawls. We spent the first day building out the backend together so we would all have a good understanding of the database structure, then went on to tackle different areas of the frontend, all tracking our progress on a joint Trello board. We included a feature where anyone visiting the site can filter the crawls to include only those with predominently outside spaces- perfect for soaking up the rays on those sunny days.</p>
                  </div>
                  <div className="projects__body-wrapper projects__body-wrapper--invert">
                    <div className="projects__image-wrapper">
                      <img src={Barlevard} alt="game gif" className="projects__image"/>
                    </div>
                    <div className="projects__text-wrapper projects__text-wrapper--invert">
                      <h3 className="subheading subheading--small">Software:</h3>
                      <p  className="text--body">React, JavaScript, CSS, Bulma, PostgreSQL, SQLAlchemy, Flask, Sinon, Enzyme, Mocha, Chai, Webpack.</p>
                      <div className="projects__cta-wrapper">
                        <a href="https://github.com/michaelsimmonds/WDI-Project-04-Sunset-Barlevard" target="_blank" rel="noopener noreferrer" className="cta cta-fill cta-fill--bar projects__cta"><span>See the Code</span></a>
                        <a href="https://sunset-barlevard.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="cta cta-fill cta-fill--bar projects__cta"><span>Visit the Site</span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="projects__controls-block projects__controls-block--invert">
              <div className="projects__controls-block-wrapper">
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                  <div className="swiper-button-prev swiper-button-prev--invert">
                    <img src={Chevron} className="swiper-button-prev__chevron"/>
                  </div>
                  <div className="swiper-pagination"></div>
                  <div className="swiper-button-next swiper-button-next--invert">
                    <img src={Chevron} className="swiper-button-next__chevron"/>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GaProjects
