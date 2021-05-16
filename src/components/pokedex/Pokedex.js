import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import {
  getPokemonsInfoOperation,
  getPokemonsOperation,
} from '../../redux/operations/pokedexOperations'
import {
  getCurrentPokemon,
  getLoading,
  getNotification,
  getPokemons,
  getPokemonsData,
} from '../../redux/selectors/pokedexSelectors'
import Loader from '../loader/Loader'
import LoadMoreBtn from '../loadMoreBtn/LoadMoreBtn'
import PokemonList from '../pokemonList/PokemonList'
import RigthSideBar from '../rightSideBar/RigthSideBar'
import Wrapper from './PokedexStyled'
import Notification from '../notification/Notification'

const Pokedex = () => {
  const dispatch = useDispatch()
  const pokemons = useSelector(getPokemons)
  const data = useSelector(getPokemonsData)
  const currentPokemon = useSelector(getCurrentPokemon)
  const loading = useSelector(getLoading)
  const showNotif = useSelector(getNotification)

  const [page, setPage] = useState(2)

  useEffect(() => {
    dispatch(getPokemonsOperation())
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    dispatch(getPokemonsInfoOperation())
    // eslint-disable-next-line
  }, [data])

  return (
    <Wrapper>
      {loading && (
        <div className="loader">
          <Loader />
        </div>
      )}
      <CSSTransition
        in={showNotif}
        timeout={250}
        classNames="my-notif"
        unmountOnExit
      >
        <Notification />
      </CSSTransition>
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
