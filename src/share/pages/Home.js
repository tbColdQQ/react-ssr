import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function Home () {

  return <div onClick={() => console.log('hello')}>
    Home works 123
    <Link to='/list'> jump to list</Link>
  </div>
}

export default connect()(Home)