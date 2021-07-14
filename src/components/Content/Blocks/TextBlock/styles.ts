import styled, { css } from 'styled-components'

import { basicContainer } from '../../../../styles/basic.styles'

export const Container = styled(basicContainer)`
  ${({ theme }) => css`
    width: 30%;
    text-align: center;

    a {
      display: inline-block;
      text-decoration: underline;
      color: ${theme.colors.caribeanGreen};
      margin: 0 0.9375rem;
    }
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-family: ${theme.font.special};
    font-size: 2rem;
    font-weight: 500;
    color: ${theme.colors.shark};
    margin-bottom: 1.5625rem;
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: 1rem;
    line-height: 1.5;
    color: ${theme.colors.shark};
    margin-bottom: 1.5625rem;
  `}
`
