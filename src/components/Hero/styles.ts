import styled, { css } from 'styled-components'

import { basicContainer } from '../../styles/basic.styles'

export const Container = styled(basicContainer)``

export const Hero = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: calc(100vh - 10rem);
    background: ${theme.colors.codGray};
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 4.375rem;
    font-weight: 400;
    line-height: 1;
    color: ${theme.colors.gallery};
    margin-bottom: 1.5625rem;
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    width: 40%;
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.45;
    color: ${theme.colors.gallery};
    margin-bottom: 2.8125rem;
  `}
`

export const SubHeading = styled.h2`
  ${({ theme }) => css`
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2.5;
    color: ${theme.colors.gallery};
    margin-bottom: 1.5rem;
  `}
`

export const SubHeadLinks = styled.ul`
  ${({ theme }) => css`
    display: flex;
    gap: 2.1875rem;
    list-style: none;

    a {
      font-size: 1.125rem;
      text-decoration: underline;
      color: ${theme.colors.gallery};
      transition: ${theme.transitions.basic};

      &:hover {
        color: ${theme.colors.caribeanGreen};
      }
    }
  `}
`
