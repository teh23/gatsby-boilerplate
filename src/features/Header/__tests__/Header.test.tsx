import React from 'react'
import renderer from 'react-test-renderer'
import Header from '..'
import { ReduxWrapper } from '../../../wrap-with-provider'

describe('Header', () => {
  it('first', () => {
    const Test = renderer
      .create(
        <ReduxWrapper>
          <Header title="asd" />
        </ReduxWrapper>
      )
      .toJSON()
    expect(Test).toMatchSnapshot()
  })
})
