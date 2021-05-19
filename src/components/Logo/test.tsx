import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a gold logo by default', () => {
    //renderizar o componente
    renderWithTheme(<Logo />)
    //selecionar o elemento a ser testado
    //expect - comparação
    expect(screen.getByLabelText(/zoom bikes/i).parentElement).toHaveStyle({
      color: '#D4AF37'
    })
  })

  it('should render a white logo when color is passed', () => {
    renderWithTheme(<Logo color="white" />)
    expect(screen.getByLabelText(/zoom bikes/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a normal Logo when size is default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/zoom bikes/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  it('should render a bigger Logo', () => {
    renderWithTheme(<Logo size="large" />)
    expect(screen.getByLabelText(/zoom bikes/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })
})
