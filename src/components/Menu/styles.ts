import styled, { css } from 'styled-components'

export const NavItem = styled.a`
  ${({ theme }) => css`
    font-family: ${theme.font.special};
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    color: ${theme.colors.alto};
    margin: 0 1.25rem;
    cursor: pointer;
    transition: ${theme.transitions.basic};

    &:hover {
      color: ${theme.utils.hexToRGBA(theme.colors.alto, 60)};
    }

    &:last-child {
      margin-right: 0;
    }
  `}
`
