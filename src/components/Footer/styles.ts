import styled, { css } from 'styled-components'

import { basicContainer } from '../../styles/basic.styles'
import { IconStyleWrapper } from '../SocialLinks/styles'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    color: ${theme.colors.gallery};
    background-color: ${theme.colors.codGray};
    padding: 3.125rem 0;
  `}
`

export const Content = styled(basicContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Copyright = styled.p`
  margin: 0;
`

export const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${IconStyleWrapper} {
    margin-left: 1rem;
  }
`
