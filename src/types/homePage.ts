import { BrandProps, MenuProps, HeroProps, BodyProps, FooterProps } from './general'

export type SeoProps = {
  pageTitle: string
  pageDescription: string
}

export type HomePageProps = {
  brand: BrandProps
  menu: MenuProps
  footer: FooterProps
  seo: SeoProps
  hero: HeroProps
  body: BodyProps
}
