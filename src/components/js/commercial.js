import React from 'react'
import Swiper from 'swiper'
import ScrollAnimation from 'react-animate-on-scroll'

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
      <div className="projects module-padding">
        <div className="container">

          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <h2 className="projects__title heading">Commercial Projects</h2>
          </ScrollAnimation>

          <div className="swiper-container">
            <div className="swiper-wrapper">

              <div className="swiper-slide">
                <div className="projects__content-wrapper">
                  <div className="projects__top-wrapper">
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                      <h3 className="subheading projects__project-title">Travel</h3>
                      <p className="text--body">As part of this adventure cruise company’s brand refresh, I worked as part of a team of 7 devs to build a new frontend in partnership with a backend team based in Russia. It was exciting to learn Vue.js and TypeScript on such a fast-paced and expansive project and illustrated how indispensable good communication is across all areas of a project.</p>
                    </ScrollAnimation>
                  </div>
                  <div className="projects__body-wrapper">
                    <div className="projects__image-wrapper">
                      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <img src="/assets/images/cruise2.png" alt="game gif" className="projects__image"/>
                      </ScrollAnimation>
                    </div>
                    <div className="projects__text-wrapper">
                      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <h3 className="subheading subheading--small">Software:</h3>
                        <p  className="text--body">Vue.js, TypeScript, SCSS.</p>
                        <p>Site not yet live</p>
                      </ScrollAnimation>
                    </div>
                  </div>
                </div>
              </div>


              <div className="swiper-slide">
                <div className="projects__content-wrapper">
                  <div className="projects__top-wrapper">
                    <h3 className="subheading projects__project-title">Hospitality</h3>
                    <p className="text--body">In this project we delivered the frontend for three luxury hotels, giving each one its own unique feel whilst maintaining brand continuity throughout. It was a great opportunity to develop the skills I had learned at GA whilst introducing more advanced facets of them, such as BEM methodology. After completion of the three sites, we completed the booking flow in a separate work stream and provided extensive integration support for our back end partner.</p>
                  </div>
                  <div className="projects__body-wrapper">
                    <div className="projects__image-wrapper">
                      <img src="./assets/images/hotel.png" alt="game gif" className="projects__image"/>
                    </div>
                    <div className="projects__text-wrapper">
                      <h3 className="subheading subheading--small">Software:</h3>
                      <p  className="text--body">JavaScript, SCSS, Handlebars.</p>
                      <p>Site not yet live</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="projects__content-wrapper">
                  <div className="projects__top-wrapper">
                    <h3 className="subheading projects__project-title">Matter of Form</h3>
                    <p className="text--body">Here I helped rebuild MOF’s website using a more advanced stack. It was a great opportunity to experiment with data flow and to take the initiative on how information was presented.</p>
                  </div>
                  <div className="projects__body-wrapper">
                    <div className="projects__image-wrapper">
                      <img src="./assets/images/mof2.png" alt="game gif" className="projects__image"/>
                    </div>
                    <div className="projects__text-wrapper">
                      <h3 className="subheading subheading--small">Software:</h3>
                      <p  className="text--body">Vue.js, Nuxt.js, SCSS, Kentico.</p>
                      <p>Site not yet live</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="projects__controls-block">
              <div className="projects__controls-block-wrapper">
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                  <div className="swiper-button-prev">
                    <img src="./assets/icons/chevron-up.png" className="swiper-button-prev__chevron"/>
                  </div>
                  <div className="swiper-pagination"></div>
                  <div className="swiper-button-next">
                    <img src="./assets/icons/chevron-up.png" className="swiper-button-next__chevron"/>
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

export default Commercial
