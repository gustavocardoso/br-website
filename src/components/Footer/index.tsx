import * as S from './styles'

import { FooterProps } from '../../types/general'
import Logo from '../Logo'
import SocialLinks from '../SocialLinks'

const Footer = ({ image, url, copyright, socialLink }: FooterProps) => {
  return (
    <S.Container>
      <S.Content>
        <Logo image={image} url={url} width={131} height={28} />

        <S.Copyright>{copyright}</S.Copyright>

        <S.SocialLinksContainer>
          <SocialLinks links={socialLink} size={20} />
        </S.SocialLinksContainer>
      </S.Content>
    </S.Container>
  )
}

export default Footer
