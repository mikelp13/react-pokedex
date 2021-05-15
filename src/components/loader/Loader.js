import React from 'react'
import { css } from '@emotion/core'
import FadeLoader from 'react-spinners/FadeLoader'

const override = css`
  display: block;
  margin: 0 auto;
  margin-bottom: 10px; 
`

const Loader = () => {
  return <FadeLoader color="#F1392D" loading="true" css={override} size={150} />
}

export default Loader
