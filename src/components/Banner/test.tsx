import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

const props = {
  img: '/img/image.png',
  title: 'Bike Audax ADX 400',
  subtitle: '<p>ADX 400 <strong>2021</strong>',
  buttonLabel: 'Compre agora',
  buttonLink: '/bikes/adx-400'
}

describe('<Banner />', () => {
  it('should render the correctly', () => {
    renderWithTheme(<Banner {...props} />)

    expect(
      screen.getByRole('heading', { name: /Bike Audax ADX 400/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /ADX 400 2021/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: /Bike Audax ADX 400/i })
    ).toBeInTheDocument()
  })

  it('should render a Ribbon', () => {
    renderWithTheme(
      <Banner
        {...props}
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/My Ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: '#37474f' })
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
  })
})
