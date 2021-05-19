import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/abre menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/buscar/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/carrinho de compras/i)).toBeInTheDocument()
  })

  it('should handle the open/close mobile menu', () => {
    renderWithTheme(<Menu />)

    const fullMenuElement = screen.getByRole('navigation', { hidden: true })

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    fireEvent.click(screen.getByLabelText(/abre menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    fireEvent.click(screen.getByLabelText(/fecha menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  it('should show register box when logged out', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByText(/login/i)).toBeInTheDocument()
    expect(screen.getByText(/criar conta/i)).toBeInTheDocument()
  })

  it('should show lista de desejos e minha conta when logged in', () => {
    renderWithTheme(<Menu username="claudio" />)

    expect(screen.getByText(/minha conta/i)).toBeInTheDocument()
    expect(screen.getByText(/lista de desejos/i)).toBeInTheDocument()
    expect(screen.queryByText(/login/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/criar conta/i)).not.toBeInTheDocument()
  })
})
