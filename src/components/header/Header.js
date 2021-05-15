import React from 'react'
import HeaderStyled from './HeaderStyled'

const Header = () => {
  return (
    <HeaderStyled>
      <div className="container header">
        <span className="headerLogo">Pokedex</span>
      </div>
    </HeaderStyled>
  )
}

export default Header
