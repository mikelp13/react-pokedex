import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { hideNotifMessage } from '../../redux/actions/notifActions'
import { getError } from '../../redux/selectors/pokedexSelectors'
import NotifWrapper from './NotifStyled'

const Notice = () => {
  const ErrorMessage = useSelector(getError)
  const dispatch = useDispatch()

  useEffect(() => {
    const idTimeout = setTimeout(() => {
      dispatch(hideNotifMessage())
    }, 3000)

    return () => {
      clearTimeout(idTimeout)
    }
    // eslint-disable-next-line
  }, [])

  return (
    <NotifWrapper>
      <p className="text">{ErrorMessage}</p>
    </NotifWrapper>
  )
}

export default Notice
