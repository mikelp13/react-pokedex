import React from 'react'
import { useSelector } from 'react-redux'
import { getPokemons } from '../../redux/selectors/pokedexSelectors'
import PokemonListItem from './pokemonListItem/PokemonListItem'
import ListStyled from './PokemonListStyled'

const PokemonList = () => {
  const pokemons = useSelector(getPokemons)
  return (
    <ListStyled>
      {pokemons.map(pokemon => (
        <PokemonListItem {...pokemon} key={pokemon.id}/>
      ))}
    </ListStyled>
  )
}

export default PokemonList
