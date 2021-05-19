import '../.jest/next-image-mock'
import { ThemeProvider } from 'styled-components'
import { addDecorator } from '@storybook/react'
import { withNextRouter } from 'storybook-addon-next-router'
import GlobalStyles from '../src/styles/global'
import theme from 'styles/theme'

addDecorator(withNextRouter())

//Customiza cores padrões do Storybook
export const parameters = {
  backgrounds: {
    default: 'zoom-bg',
    values: [
      {
        name: 'zoom-bg',
        value: theme.colors.white
      },
      {
        name: 'zoom-gold',
        value: theme.colors.gold
      }
    ]
  }
}

export const decorators = [
  (Story, context) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg />
      <Story />
    </ThemeProvider>
  )
]
