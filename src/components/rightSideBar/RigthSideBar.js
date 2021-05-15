import React from 'react'
import BarStyled from './RightSideBarStyled'
import { v4 } from 'uuid'

const RigthSideBar = ({ name, types, sprites, weight, moves, stats }) => {
  const statsObj = {}
  stats.forEach(item => {
    return statsObj[item.stat.name.split('-').join('')] = item.base_stat
  })

  return (
    <BarStyled>
      <img
        src={sprites.other.dream_world.front_default}
        width="350"
        height="350"
        className="pokemonImage"
        alt={name}
      />
      <p className="pokemonName">{name[0].toUpperCase() + name.slice(1)}</p>

      <table>
      <tbody>
        <tr>
          <td>Type</td>
          <td>
            {types.map(item => (
              <span key={v4()}>{item.type.name}</span>
            ))}
          </td>
        </tr>
        <tr>
          <td>Attack</td>
          <td>{statsObj.attack}</td>
        </tr>
        <tr>
          <td>Defense</td>
          <td>{statsObj.defense}</td>
        </tr>
        <tr>
          <td>HP</td>
          <td>{statsObj.hp}</td>
        </tr>
        <tr>
          <td>SP Attack</td>
          <td>{statsObj.specialattack}</td>
        </tr>
        <tr>
          <td>SP Defense</td>
          <td>{statsObj.specialdefense}</td>
        </tr>
        <tr>
          <td>Speed</td>
          <td>{statsObj.speed}</td>
        </tr>
        <tr>
          <td>Weight</td>
          <td>{weight}</td>
        </tr>
        <tr>
          <td>Total moves</td>
          <td>{moves.length}</td>
        </tr>
        </tbody>
      </table> 
    </BarStyled>
  )
}

export default RigthSideBar
