import * as S from './styles'

import { TeamBlockProps } from '../../../../types/general'

const TeamBlock = ({ teamBlockTitle, member }: TeamBlockProps) => (
  <S.Container>
    <h2>{teamBlockTitle}</h2>
  </S.Container>
)

export default TeamBlock
