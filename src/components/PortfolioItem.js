import React from 'react'

const PortfolioItem = (props) => {
  console.log(props);
  return (
    <p>You are looking at item #{props.id}!</p>
  )
}

export default PortfolioItem
