import * as S from './styles'

import { TextBlockProps } from '../../../../types/general'
import RenderMarkdown from '../../../RenderMarkdown'

const TextBlock = ({ textBlockTitle, text }: TextBlockProps) => {
  return (
    <S.Container>
      <S.Title>{textBlockTitle}</S.Title>
      <RenderMarkdown text={text} />
    </S.Container>
  )
}

export default TextBlock
