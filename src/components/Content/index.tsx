import * as S from './styles'

import { FeatureBlockProps, TextBlockProps } from '../../types/general'

import TextBlock from './Blocks/TextBlock'
import TeamBlock from './Blocks/TeamBlock'
import FeatureBlock from './Blocks/FeatureBlock'

const Content = ({ body }) => {
  return (
    <S.Content>
      {body &&
        body.length > 0 &&
        body.map(section => {
          {
            if (section.__typename === 'ComponentPageTextBlock')
              return (
                <TextBlock
                  key={section.__typename}
                  textBlockTitle={section.textBlockTitle}
                  text={section.text}
                />
              )

            if (section.__typename === 'ComponentPageFeatureBlock')
              return (
                <FeatureBlock
                  key={section.__typename}
                  featureBlockTitle={section.featureBlockTitle}
                  feature={section.feature}
                />
              )

            if (section.__typename === 'ComponentPageTeamBlock')
              return (
                <TeamBlock
                  key={section.__typename}
                  teamBlockTitle={section.teamBlockTitle}
                  member={section.member}
                />
              )
          }
        })}
    </S.Content>
  )
}

export default Content
