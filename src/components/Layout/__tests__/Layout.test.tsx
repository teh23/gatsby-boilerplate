import React from 'react'
import { render } from '@testing-library/react'
import Layout from '..'
import { ReduxWrapper } from '../../../wrap-with-provider'

describe('Layout tests', () => {
  it('first', () => {
    const Test = render(
      <ReduxWrapper>
        <Layout title="test" description="test">
          test
        </Layout>
      </ReduxWrapper>
    )

    expect(Test).toMatchSnapshot()
  })
})
