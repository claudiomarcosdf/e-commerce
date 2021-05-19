import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { CartPlus } from '@styled-icons/bootstrap/CartPlus'

import Button from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    renderWithTheme(<Button>Compre já</Button>)

    expect(screen.getByRole('button', { name: /Compre já/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })
  })

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Compre já</Button>)

    expect(screen.getByRole('button', { name: /Compre já/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large size', () => {
    renderWithTheme(<Button size="large">Compre já</Button>)

    expect(screen.getByRole('button', { name: /Compre já/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem'
    })
  })

  it('should render a fullWidth version', () => {
    renderWithTheme(<Button fullWidth>Compre já</Button>)

    expect(screen.getByRole('button', { name: /Compre já/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render a icon version', () => {
    renderWithTheme(
      <Button icon={<CartPlus data-testid="icon" />}>Compre já</Button>
    )

    expect(screen.getByText(/Compre já/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
