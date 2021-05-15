import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentPokemon } from '../../redux/actions/pokedexActions'
import { getPokemons } from '../../redux/selectors/pokedexSelectors'
import PokemonListItem from './pokemonListItem/PokemonListItem'
import ListStyled from './PokemonListStyled'

const PokemonList = () => {
  const pokemons = useSelector(getPokemons)
  const dispatch = useDispatch()

  const handleClick = e => {
    dispatch(getCurrentPokemon(e.currentTarget.dataset.id))
  }

  return (
    <ListStyled>
      {pokemons.map(pokemon => (
        <PokemonListItem {...pokemon} key={pokemon.id} onClick={handleClick} />
      ))}
    </ListStyled>
  )
}

export default PokemonList
