import styled, { css } from 'styled-components'

import { LogoProps } from '.'

const wrapperModifiers = {
  normal: () => css`
    width: 11rem;
    height: 3.3.rem;
  `,

  large: () => css`
    width: 20rem;
    height: 5.9.rem;
  `,

  small: () => css`
    width: 7.8rem;
    height: 3rem;
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size }) => css`
    color: ${theme.colors[color!]};

    ${!!size && wrapperModifiers[size]};
  `}
`
