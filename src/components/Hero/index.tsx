import Link from 'next/link'

import { HeroProps } from '../../types/general'
import * as S from './styles'

const Hero = ({ heading, description, subHeading, link }: HeroProps) => {
  return (
    <S.Hero>
      <S.Container>
        {heading && (
          <S.Title
            dangerouslySetInnerHTML={{
              __html: heading
            }}
          ></S.Title>
        )}
        {description && <S.Description>{description}</S.Description>}
        {subHeading && <S.SubHeading>{subHeading}</S.SubHeading>}
        {link && (
          <S.SubHeadLinks>
            {link.map((item, index) => (
              <li key={index}>
                <Link href={item.url}>
                  <a>{item.label}</a>
                </Link>
              </li>
            ))}
          </S.SubHeadLinks>
        )}
      </S.Container>
    </S.Hero>
  )
}

export default Hero
