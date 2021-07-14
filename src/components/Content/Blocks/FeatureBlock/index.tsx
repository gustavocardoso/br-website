import * as S from './styles'

import { FeatureBlockProps } from '../../../../types/general'

const FeatureBlock = ({ featureBlockTitle, feature }: FeatureBlockProps) => (
  <S.Container>
    <h2>{featureBlockTitle}</h2>
  </S.Container>
)

export default FeatureBlock
