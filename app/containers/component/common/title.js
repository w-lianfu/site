import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

class Title extends Component {

  render() {
    return (
      <div className='title'>
        <nav>
          <Link to='/'><i className="material-icons">home</i>我的站点</Link>
          <Link to='/reader'><i className="material-icons">chrome_reader_mode</i>阅读器</Link>
        </nav>
        <nav>
          <Link to='/write'><i className='material-icons'>border_color</i>写</Link>
          <Link to='/my' className='narrow'><i className='material-icons'>home</i></Link>
          <Link to='/notice' className='narrow'><i className='material-icons'>notifications</i></Link>
        </nav>
      </div>
    )
  }
}

export default Title
