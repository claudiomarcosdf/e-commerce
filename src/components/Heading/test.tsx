import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import 'jest-styled-components'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a gold heading by default', () => {
    renderWithTheme(<Heading>Zoom Bikes</Heading>)
    expect(screen.getByRole('heading', { name: /zoom bikes/i })).toHaveStyle({
      color: '#D4AF37'
    })
  })

  it('should render a choose white heading', () => {
    renderWithTheme(<Heading color="white">Zoom Bikes</Heading>)
    expect(screen.getByRole('heading', { name: /zoom bikes/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a heading with a line left border', () => {
    renderWithTheme(<Heading lineLeft>Zoom Bikes</Heading>)
    expect(screen.getByRole('heading', { name: /zoom bikes/i })).toHaveStyle({
      'border-left': '0.5rem solid #D4AF37'
    })
  })

  it('should render a heading with a line bottom border', () => {
    renderWithTheme(<Heading lineBottom>Zoom Bikes</Heading>)
    expect(
      screen.getByRole('heading', { name: /zoom bikes/i })
    ).toHaveStyleRule('border-bottom', '0.5rem solid #D4AF37', {
      modifier: '::after'
    })
  })

  it('should render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">Zoom Bikes</Heading>)
    expect(screen.getByRole('heading', { name: /zoom bikes/i })).toHaveStyle({
      'font-size': '1.6rem'
    })
    expect(
      screen.getByRole('heading', { name: /zoom bikes/i })
    ).toHaveStyleRule('width', '3rem', {
      modifier: '::after'
    })
  })

  it('should render a Heading with a primary line color', () => {
    renderWithTheme(
      <Heading lineColor="primary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )
    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.5rem solid #D4AF37' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #D4AF37', {
      modifier: '::after'
    })
  })

  it('should render a Heading with a secondary line color', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )
    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.5rem solid #37474f' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #37474f', {
      modifier: '::after'
    })
  })
})
