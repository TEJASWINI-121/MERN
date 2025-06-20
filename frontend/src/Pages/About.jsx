import React from 'react'
import State from '../Hooks/State'
import Form from '../Hooks/Form'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h1>about page</h1>
        <Link to='/state'>UseState Example</Link>
        <br />
        <Link to='/form'>Form Example</Link>
        <br />
        <Link to='/effect'>UseEffect Example</Link>
    </div>
  )
}

export default About