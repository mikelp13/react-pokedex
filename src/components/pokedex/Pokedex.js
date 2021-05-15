import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getPokemonsInfoOperation,
  getPokemonsOperation,
} from '../../redux/operations/pokedexOperations'
import {
  getCurrentPokemon,
  getPokemons,
} from '../../redux/selectors/pokedexSelectors'
import LoadMoreBtn from '../loadMoreBtn/LoadMoreBtn'
import PokemonList from '../pokemonList/PokemonList'
import RigthSideBar from '../rightSideBar/RigthSideBar'
import Wrapper from './PokedexStyled'

const Pokedex = () => {
  const dispatch = useDispatch()
  const pokemons = useSelector(getPokemons)
  const currentPokemon = useSelector(getCurrentPokemon)
  console.log(`currentPokemon`, currentPokemon)

  useEffect(() => {
    dispatch(getPokemonsOperation())
    setTimeout(() => {
      dispatch(getPokemonsInfoOperation())
    }, 100)

    // eslint-disable-next-line
  }, [])

  return (
    <Wrapper>
      <div className="container pageContainer">
        <div className="pokemonsContainer">
          <PokemonList />
          {pokemons.length > 0 && <LoadMoreBtn />}
        </div>
        <div className="sideBarContainer">
          {currentPokemon && <RigthSideBar {...currentPokemon} />}
        </div>
      </div>
    </Wrapper>
  )
}

export default Pokedex
