import styled, { css } from 'styled-components'

import { basicContainer } from '../../styles/basic.styles'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.codGray};
  `}
`

export const Header = styled(basicContainer)`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* position: fixed; */
    height: 10rem;
    /* top: 50px;
    left: 0;
    right: 0; */

    > .link {
      line-height: 0;
    }
  `}
`
