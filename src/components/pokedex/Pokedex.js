import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonsInfoOperation, getPokemonsOperation } from '../../redux/operations/pokedexOperations'
import { getPokemonData } from '../../redux/selectors/pokedexSelectors'
import LoadMoreBtn from '../loadMoreBtn/LoadMoreBtn'

const Pokedex = () => {
  const dispatch = useDispatch()
  const data = useSelector(getPokemonData)

  useEffect(() => {
    dispatch(getPokemonsOperation())
    setTimeout(() => {
      dispatch(getPokemonsInfoOperation())
    }, 1000);
 
    // eslint-disable-next-line 
  }, [])

  return (
    <div>
      <div className="container">
        <h1>POKEDEX</h1>
        <LoadMoreBtn/>
      </div>
    </div>
  )
}

export default Pokedex
