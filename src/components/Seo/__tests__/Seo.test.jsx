import React from 'react'
import { render } from '@testing-library/react'
import Seo from '..'

describe('Seo components', () => {
  it('render seo correctly', () => {
    const title = 'test'
    const description = 'test desc'
    const { container } = render(<Seo title={title} description={description} />)
    expect(container).toMatchSnapshot()
  })
  it('test render wihout props', () => {
    const { container } = render(<Seo />)
    expect(container).toMatchSnapshot()
  })
})
