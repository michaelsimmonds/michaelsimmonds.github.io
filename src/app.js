import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'

import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Nav from './components/js/Nav'
import Hero from './components/js/Hero'
import Intro from './components/js/Intro'
import GaProjects from './components/js/ga-projects'


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>

        <main>
          <Route component={Nav}/>
          <Route component={Hero}/>
          <Route component={Intro}/>
          <Route component={GaProjects}/>
        </main>

      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)


// <Route path="/events/:id" component={EventsShow} />
// <Route exact path="/events" component={EventsIndex}>Events</Route>


// old app.js file below
// $('DOM content loaded', function() {
//
//   $('#hero').animate({ opacity: 1 }, { duration: 3000 })
//
//   $('.project-content').hide()
//
//   $('button').click(function () {
//     $(this).prev('.project-content').slideToggle()
//     $(this).prev('.project-content').css('display', 'flex')
//     $(this).toggleClass('show-button hide-button')
//   })
//
// })
