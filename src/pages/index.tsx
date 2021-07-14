import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { GetStaticProps } from 'next'

import client from '../graphql/client'
import GET_HOME_PAGE from '../graphql/queries/getHomePage'
import { HomePageProps } from '../types/homePage'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Content from '../components/Content'

export const getStaticProps: GetStaticProps = async () => {
  const { brand, menu, footer, page } = await client.request(GET_HOME_PAGE)

  return {
    props: {
      brand,
      menu,
      footer,
      ...page
    }
  }
}

export default function Home({ brand, menu, footer, seo, hero, body }: HomePageProps) {
  const {
    logo: { image },
    logo: { url }
  } = brand

  const { links } = menu

  return (
    <>
      <Head>{/* <title>{seo.pageTitle}</title> */}</Head>
      <NextSeo title={seo.pageTitle} description={seo.pageDescription} />

      <Header image={image} url={`${url}`} links={links} />
      <Hero {...hero} />
      <Content body={body} />
      <Footer image={image} url={`${url}`} {...footer} />
    </>
  )
}
