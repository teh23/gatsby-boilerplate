import React from 'react'
import { Provider } from 'react-redux'
import store from './store'

export const ReduxWrapper = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>
}
export default ({ element }: { element: React.ReactNode }) => {
  return <Provider store={store}>{element}</Provider>
}
