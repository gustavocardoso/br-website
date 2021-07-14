import { ReactElement } from 'react'
import * as S from './styles'

import { SocialLinksProps } from '../../types/general'

import { Facebook } from '@styled-icons/boxicons-logos/Facebook'
import { Twitter } from '@styled-icons/boxicons-logos/Twitter'
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare'

const socialIcon = (socialNetwork: string, size: number): ReactElement => {
  switch (socialNetwork) {
    case 'Facebook':
      return <Facebook size={size} className='social-icon' />
      break
    case 'Linkedin':
      return <LinkedinSquare size={size} className='social-icon' />
      break
    case 'Twitter':
      return <Twitter size={size} className='social-icon' />
      break
    default:
      break
  }
}

const SocialLinks = ({ links, size }: SocialLinksProps) => {
  return (
    <>
      {links.map(link => (
        <a href={link.url} target='_blank'>
          <S.IconStyleWrapper>{socialIcon(link.socialNetwork, size)}</S.IconStyleWrapper>
        </a>
      ))}
    </>
  )
}

export default SocialLinks
