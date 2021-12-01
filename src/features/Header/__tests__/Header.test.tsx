import React from 'react'
import renderer from 'react-test-renderer'
import Header from '..'

describe('Header', () => {
  it('first', () => {
    const Test = renderer.create(<Header title="asd" />).toJSON()
    expect(Test).toMatchSnapshot()
  })
})
