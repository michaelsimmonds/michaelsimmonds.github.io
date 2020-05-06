import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'

import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Nav from './components/js/Nav'
import Hero from './components/js/Hero'
import Intro from './components/js/Intro'
import Software from './components/js/Software'
import GaProjects from './components/js/ga-projects'


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>

        <main>
          <Route component={Nav}/>
          <Route component={Hero}/>
          <Route component={Intro}/>
          <Route component={Software}/>
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
