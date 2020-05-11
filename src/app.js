import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import './style.scss'
import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'

import Nav from './components/js/nav'
import Hero from './components/js/hero'
import Intro from './components/js/intro'
import Software from './components/js/software'
import Commercial from './components/js/commercial'
import GaProjects from './components/js/ga-projects'
import Contact from './components/js/contact'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>

        <main>
          <Route component={Nav}/>
          <Route component={Hero}/>
          <Route component={Intro}/>
          <Route component={Software}/>
          <Route component={Commercial}/>
          <Route component={GaProjects}/>
          <Route component={Contact}/>
        </main>

      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
