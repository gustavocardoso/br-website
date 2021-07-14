import Link from 'next/link'

import { MenuProps } from '../../types/general'
import * as S from './styles'

const Menu = ({ links }: MenuProps) => {
  return (
    <nav>
      {links.map(item => (
        <Link href={`/${item.url}`} key={item.url}>
          <S.NavItem>{item.label}</S.NavItem>
        </Link>
      ))}
    </nav>
  )
}

export default Menu
