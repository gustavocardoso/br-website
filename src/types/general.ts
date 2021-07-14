export type ImageProps = {
  url: string
  alternativeText?: string
  width?: string | number
  height?: string | number
}

export type LogoProps = {
  image: ImageProps
  url: string
  width: number
  height: number
}

export type BrandProps = {
  name: string
  logo: LogoProps
}

export type LinkProps = {
  label: string
  url: string
}

export type SocialLinkProps = {
  socialNetwork: string
  url: string
}

export type SocialLinksProps = {
  links: [SocialLinkProps]
  size: number
}

export type MenuProps = {
  links: [LinkProps]
}

export type HeaderProps = {
  image: ImageProps
  url: string
  links: [LinkProps]
}

export type TextBlockProps = {
  __typename?: string
  textBlockTitle: string
  text: string
}

export type FeatureProps = {
  title: string
  description: string
  icon: ImageProps
}

export type FeatureBlockProps = {
  __typename?: string
  featureBlockTitle: string
  feature: [FeatureProps]
}

export type MemberProps = {
  name: string
  role: string
  description: string
  photo: ImageProps
}

export type TeamBlockProps = {
  __typename?: string
  teamBlockTitle: string
  member: [MemberProps]
}

type ContentBody = TextBlockProps | FeatureBlockProps

export type BodyProps = {
  body: [ContentBody]
}

export type MarkdownProps = {
  text: string
}

export type FooterProps = {
  image: ImageProps
  url: string
  copyright: string
  socialLink: [SocialLinkProps]
}

export type HeroProps = {
  heading: string
  description: string
  subHeading: string
  link: [LinkProps]
}
