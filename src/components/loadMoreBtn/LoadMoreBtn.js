import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  getPokemonsInfoOperation,
  getPokemonsOperation,
} from '../../redux/operations/pokedexOperations'
import ButtonStyled from './LoadMoreBtnStyled'

const LoadMoreBtn = ({page, setPage}) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(getPokemonsOperation(page))

    setTimeout(() => {
      dispatch(getPokemonsInfoOperation())
    }, 100)

    setPage(page + 1)

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    })
  }
  return (
    <ButtonStyled type="button" onClick={handleClick}>
      Load more
    </ButtonStyled>
  )
}

export default LoadMoreBtn
