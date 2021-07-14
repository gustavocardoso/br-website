import styled, { css } from 'styled-components'
import { StyledIconBase } from '@styled-icons/styled-icon'

export const IconStyleWrapper = styled.div`
  ${({ theme }) => css`
    ${StyledIconBase} {
      color: ${theme.colors.alto};
      transition: ${theme.transitions.basic};
    }

    &:hover {
      ${StyledIconBase} {
        color: ${theme.colors.caribeanGreen};
      }
    }
  `}
`
