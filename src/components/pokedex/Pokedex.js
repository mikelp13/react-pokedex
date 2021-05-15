import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  getPokemonsInfoOperation,
  getPokemonsOperation,
} from '../../redux/operations/pokedexOperations'
import {
  getCurrentPokemon,
  getLoading,
  getPokemons,
  getPokemonsData,
} from '../../redux/selectors/pokedexSelectors'
import Loader from '../loader/Loader'
import LoadMoreBtn from '../loadMoreBtn/LoadMoreBtn'
import PokemonList from '../pokemonList/PokemonList'
import RigthSideBar from '../rightSideBar/RigthSideBar'
import Wrapper from './PokedexStyled'

const Pokedex = () => {
  const dispatch = useDispatch()
  const pokemons = useSelector(getPokemons)
  const data = useSelector(getPokemonsData)
  const loading = useSelector(getLoading)
  const currentPokemon = useSelector(getCurrentPokemon)
  const [page, setPage] = useState(2)

  useEffect(() => {
    dispatch(getPokemonsOperation())
    setTimeout(() => {
      dispatch(getPokemonsInfoOperation())
    }, 100)
    // eslint-disable-next-line
  }, [])

  return (
    <Wrapper>
      {loading && (
        <div className="loader">
          <Loader />
        </div>
      )}
      <div className="container pageContainer">
        <div className="pokemonsContainer">
          <PokemonList />
          {pokemons.length > 0 && !loading && (
            <LoadMoreBtn setPage={setPage} page={page} />
          )}
          {pokemons.length > 0 && loading && <Loader />}
        </div>
        <div className="sideBarContainer">
          {currentPokemon && <RigthSideBar {...currentPokemon} />}
        </div>
      </div>
    </Wrapper>
  )
}

export default Pokedex
