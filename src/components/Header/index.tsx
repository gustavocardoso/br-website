import * as S from './styles'

import { HeaderProps } from '../../types/general'

import Logo from '../Logo'
import Menu from '../Menu'

const Header = ({ image, url, links }: HeaderProps) => {
  return (
    <S.Container>
      <S.Header as='header'>
        <Logo image={image} url={url} width={150} height={32} />
        <Menu links={links} />
      </S.Header>
    </S.Container>
  )
}

export default Header
