import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {getPokemonsInfoOperation, getPokemonsOperation} from '../../redux/operations/pokedexOperations'

const LoadMoreBtn = () => {
  const dispatch = useDispatch()
  const [page, setPage] = useState(2)

  const handleClick = () => {
    dispatch(getPokemonsOperation(page))
    setTimeout(() => {
      dispatch(getPokemonsInfoOperation())
    }, 1000);
    setPage(page + 1)
  }
  return (
    <button type="button" onClick={handleClick}>
      Load more
    </button>
  )
}

export default LoadMoreBtn
