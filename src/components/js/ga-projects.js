import React from 'react'
import Swiper from 'swiper'

class GaProjects extends React.Component {

  componentDidMount() {

    var swiper = new Swiper('.swiper-container', {
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
      <div className="ga-projects module-padding">
        <div className="container">

          <h2 className="ga-projects__title heading">General Assembly Projects</h2>

          <div className="swiper-container">
            <div className="swiper-wrapper">


              <div className="swiper-slide">
                <div className="ga-projects__content-wrapper">
                  <div className="ga-projects__top-wrapper">
                    <h3 className="subheading ga-projects__project-title">Space Invaders</h3>
                    <p className="text--body">This week-long project was the first I completed at General Assembly. In this remake of the classic 80s arcade game, the player aims to shoot as many aliens as possible before running out of lives or the aliens invade. Each wave gets harder and harder, with the aliens moving faster and shooting more frequently. Why not give it a go??</p>
                  </div>
                  <div className="ga-projects__body-wrapper">
                    <div className="ga-projects__image-wrapper">
                      <img src="/assets/invaders.gif" alt="game gif" className="ga-projects__image"/>
                    </div>
                    <div className="ga-projects__text-wrapper">
                      <h3 className="subheading subheading--small">Software:</h3>
                      <p  className="text--body">Vanilla JavaScript, HTML, CSS.</p>
                      <div className="ga-projects__cta-wrapper">
                        <a href="https://github.com/michaelsimmonds/WDI-Project-01" target="_blank" className="cta cta-fill cta-fill--bar ga-projects__cta">
                          <span>See the Code</span>
                        </a>
                        <a href="http://michaelsimmonds.me/WDI-Project-01/" target="_blank" className="cta cta-fill cta-fill--bar ga-projects__cta"><span>Play the Game</span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="swiper-slide">
                <div className="ga-projects__content-wrapper">
                  <div className="ga-projects__top-wrapper">
                    <h3 className="subheading ga-projects__project-title">Comedy Night Hackathon</h3>
                    <p className="text--body">In this two day pair project we used an external API to gather information about comedy nights in London. The user can search for a specific night or just browse what London has to offer. Events are displayed with an accompanying map showing its location and a link to the ticket office.</p>
                  </div>
                  <div className="ga-projects__body-wrapper">
                    <div className="ga-projects__image-wrapper">
                      <img src="./assets/hackathon.gif" alt="game gif" className="ga-projects__image"/>
                    </div>
                    <div className="ga-projects__text-wrapper">
                      <h3 className="subheading subheading--small">Software:</h3>
                      <p  className="text--body">React, Axios, JavaScript, CSS, Bulma.</p>
                      <div className="ga-projects__cta-wrapper">
                        <a href="https://github.com/michaelsimmonds/WDI-Project-02-Hackathon" target="_blank" className="cta cta-fill cta-fill--bar ga-projects__cta"><span>See the Code</span></a>
                        <a href="https://react-comedynight-hackathon.herokuapp.com/" target="_blank" className="cta cta-fill cta-fill--bar ga-projects__cta"><span>Visit the Site</span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="ga-projects__content-wrapper">
                  <div className="ga-projects__top-wrapper">
                    <h3 className="subheading ga-projects__project-title">Explore Travel</h3>
                    <p className="text--body">For this five day group project, we built a full-stack application to plan and display a round-the-world trip. Users can browse the famous sites that are included in our database and add them to their dashboard. They can then visualise their trip on their dashboard's map and change the order of their journey using a React drag-and-drop feature. I focussed on the backend for this project whilst my teammates worked on the frontend and the dashboard component respectively.</p>
                  </div>
                  <div className="ga-projects__body-wrapper">
                    <div className="ga-projects__image-wrapper">
                      <img src="./assets/travel-app.gif" alt="game gif" className="ga-projects__image"/>
                    </div>
                    <div className="ga-projects__text-wrapper">
                      <h3 className="subheading subheading--small">Software:</h3>
                      <p  className="text--body">React, JavaScript, CSS, Bulma, MongoDB, Mongoose, Express, Axios, Mocha, Chai, Webpack.</p>
                      <div className="ga-projects__cta-wrapper">
                        <a href="https://github.com/michaelsimmonds/WDI-Project-03-Explore-Travel" target="_blank" className="cta cta-fill cta-fill--bar ga-projects__cta"><span>See the Code</span></a>
                        <a href="https://explore-travel.herokuapp.com/" target="_blank" className="cta cta-fill cta-fill--bar ga-projects__cta"><span>Visit the Site</span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="ga-projects__content-wrapper">
                  <div className="ga-projects__top-wrapper">
                    <h3 className="subheading ga-projects__project-title">Sunset Barlevard</h3>
                    <p className="text--body">In this week-long group project we created an app which enables users to create and display their own bar crawls. We spent the first day building out the backend together so we would all have a good understanding of the database structure, then went on to tackle different areas of the frontend, all tracking our progress on a joint Trello board. We included a feature where anyone visiting the site can filter the crawls to include only those with predominently outside spaces- perfect for soaking up the rays on those sunny days.</p>
                  </div>
                  <div className="ga-projects__body-wrapper">
                    <div className="ga-projects__image-wrapper">
                      <img src="./assets/barlevard.gif" alt="game gif" className="ga-projects__image"/>
                    </div>
                    <div className="ga-projects__text-wrapper">
                      <h3 className="subheading subheading--small">Software:</h3>
                      <p  className="text--body">React, JavaScript, CSS, Bulma, PostgreSQL, SQLAlchemy, Flask, Sinon, Enzyme, Mocha, Chai, Webpack.</p>
                      <div className="ga-projects__cta-wrapper">
                        <a href="https://github.com/michaelsimmonds/WDI-Project-04-Sunset-Barlevard" target="_blank" className="cta cta-fill cta-fill--bar ga-projects__cta"><span>See the Code</span></a>
                        <a href="https://sunset-barlevard.herokuapp.com/" target="_blank" className="cta cta-fill cta-fill--bar ga-projects__cta"><span>Visit the Site</span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ga-projects__controls-block">
              <div className="ga-projects__controls-block-wrapper">
                <div className="swiper-button-prev">
                  <img src="./assets/chevron-up.png" className="swiper-button-prev__chevron"/>
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-next">
                  <img src="./assets/chevron-up.png" className="swiper-button-next__chevron"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GaProjects
