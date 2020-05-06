import React from 'react'
import Swiper from 'swiper'

class Commercial extends React.Component {

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
      <div className="ga-projects module-padding">
        <div className="container">

          <h2 className="ga-projects__title heading">Commercial Projects</h2>

          <div className="swiper-container">
            <div className="swiper-wrapper">


              <div className="swiper-slide">
                <div className="ga-projects__content-wrapper">
                  <div className="ga-projects__top-wrapper">
                    <h3 className="subheading ga-projects__project-title">Website build for Adventure Cruise company</h3>
                    <p className="text--body"></p>
                  </div>
                  <div className="ga-projects__body-wrapper">
                    <div className="ga-projects__image-wrapper">
                      <img src="/assets/hotel.png" alt="game gif" className="ga-projects__image"/>
                    </div>
                    <div className="ga-projects__text-wrapper">
                      <h3 className="subheading subheading--small">Software:</h3>
                      <p  className="text--body">Vue.js, TypeScript, SCSS.</p>
                      <p>Site not yet live</p>
                    </div>
                  </div>
                </div>
              </div>


              <div className="swiper-slide">
                <div className="ga-projects__content-wrapper">
                  <div className="ga-projects__top-wrapper">
                    <h3 className="subheading ga-projects__project-title">Website build for three luxury hotels</h3>
                    <p className="text--body"></p>
                  </div>
                  <div className="ga-projects__body-wrapper">
                    <div className="ga-projects__image-wrapper">
                      <img src="./assets/hotel.png" alt="game gif" className="ga-projects__image"/>
                    </div>
                    <div className="ga-projects__text-wrapper">
                      <h3 className="subheading subheading--small">Software:</h3>
                      <p  className="text--body">JavaScript, SCSS, Handlebars.</p>
                      <p>Site not yet live</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="ga-projects__content-wrapper">
                  <div className="ga-projects__top-wrapper">
                    <h3 className="subheading ga-projects__project-title">Matter of Form</h3>
                    <p className="text--body"></p>
                  </div>
                  <div className="ga-projects__body-wrapper">
                    <div className="ga-projects__image-wrapper">
                      <img src="./assets/hotel.png" alt="game gif" className="ga-projects__image"/>
                    </div>
                    <div className="ga-projects__text-wrapper">
                      <h3 className="subheading subheading--small">Software:</h3>
                      <p  className="text--body">Vue.js, Nuxt.js, SCSS, Kentico.</p>
                      <p>Site not yet live</p>
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

export default Commercial
