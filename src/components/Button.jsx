import React from 'react'
import './styles/Button.css'

const Button = ({handleNewQuote}) => {
  return (
    <div>
         <button className='button' onClick={handleNewQuote} ><i className='bx bx-refresh'></i></button>
    </div>
  )
}

export default Button