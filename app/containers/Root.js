import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './component/global/app.global.scss'
import comp from './component/global/comp'

import Site from './component/site'
import Reader from './component/reader'
import My from './component/my'
import Title from './component/common/title'

class Root extends Component {
  render() {
    return (
      <Router>
        <comp.flex_column_justify style={{height: '100%'}}>
          <Title />
          <Route path='/' component={Site} />
          <Route path='/Reader' component={Reader} />
          <Route path='/my' component={My} />
        </comp.flex_column_justify>
      </Router>
    )
  }
}

export default Root
