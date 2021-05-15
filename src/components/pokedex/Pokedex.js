import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getPokemonsInfoOperation,
  getPokemonsOperation,
} from '../../redux/operations/pokedexOperations'
import { getPokemons } from '../../redux/selectors/pokedexSelectors'
import LoadMoreBtn from '../loadMoreBtn/LoadMoreBtn'
import PokemonList from '../pokemonList/PokemonList'

const Pokedex = () => {
  const dispatch = useDispatch()
  const pokemons = useSelector(getPokemons)

  useEffect(() => {
    dispatch(getPokemonsOperation())
    setTimeout(() => {
      dispatch(getPokemonsInfoOperation())
    }, 100)

    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <div className="container">
        <PokemonList />
        {pokemons.length > 0 && <LoadMoreBtn />}
      </div>
    </div>
  )
}

export default Pokedex
