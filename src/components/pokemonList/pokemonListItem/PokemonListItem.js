import React from 'react'
import { v4 } from 'uuid'
import pokemonType from '../../../utils/typeColors'

const PokemonListItem = ({ name, types, sprites }) => {
  return (
    <li className="listItem">
      <img
        src={sprites.other.dream_world.front_default}
        width="200"
        height="150"
        className="pokemonImage"
        alt={name}
      />
      <p className="pokemonName">{name[0].toUpperCase() + name.slice(1)}</p>
      <ul className="typesList">
        {types.map(item => (
          <li
            key={v4()}
            className="typeItem"
            style={{ backgroundColor: pokemonType[item.type.name] }}
          >
            {item.type.name}
          </li>
        ))}
      </ul>
    </li>
  )
}

export default PokemonListItem
