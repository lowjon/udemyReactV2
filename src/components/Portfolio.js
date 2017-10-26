import React from 'react'
import PortfolioItem from './PortfolioItem'
import { Link } from 'react-router-dom'

const Portfolio = (props) => {
  console.log(props);
  return (
    <div>
      <p>Here are some cool things:</p>
      <Link to="/portfolio/awesomething">Awesome-thing</Link>
      <Link to="/portfolio/coolstuff">Cool stuff</Link>
      <Link to="/portfolio/neato">Neato mosquito</Link>

      {props.match.params.id && <PortfolioItem id={props.match.params.id}/>}
    </div>

  )
}

export default Portfolio
