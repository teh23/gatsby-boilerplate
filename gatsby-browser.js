/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import './src/styles/global.scss'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/store'

export const wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>
}
