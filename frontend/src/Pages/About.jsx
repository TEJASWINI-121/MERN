import React from 'react'
import State from '../Hooks/State'

import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../Hooks/UserContext'
import { UserContext1 } from '../Hooks/UserContext1.jsx'


const About = () => {
  const name=useContext(UserContext)
  const User=useContext(UserContext1)
  return (
    <div>
      <h1>Hii {name}</h1>
      <h1>Hii {User.name}</h1>
        <h1>about page</h1>
        <Link to='/state'>UseState Example</Link>
        <br />
        <Link to='/form'>Form Example</Link>
        <br />
        <Link to='/effect'>UseEffect Example</Link>
        <br />
        <Link to='/reducer'>UseReducer Example</Link>
        <br />
    </div>
  )
}

export default About