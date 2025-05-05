import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalWithTabs from '@solid-ui-blocks/Modal/Block01'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Hero from '@solid-ui-blocks/Hero/Block01'
import Hero2 from '@solid-ui-blocks/Hero/Block02'
import Companies from '@solid-ui-blocks/Companies/Block01'
import BuildBrand from '@solid-ui-blocks/FeaturesWithPhoto/Block04'
import WhyChooseUs from '@solid-ui-blocks/Features/Block04'
import FeatureTwo from '@solid-ui-blocks/FeaturesWithPhoto/Block03'
import Stats from '@solid-ui-blocks/Stats/Block01'
import Strategies from '@solid-ui-blocks/Features/Block06'
import Download from '@solid-ui-blocks/CallToAction/Block02'
import Testimonials from '@solid-ui-blocks/Testimonials/Block02'
import FeatureOne from '@solid-ui-blocks/FeaturesWithPhoto/Block01'
import Menu from '@solid-ui-blocks/Menu'
import FeatureOnetext from '@solid-ui-blocks/FeaturesWithPhoto/Block08'
import Blog from '@solid-ui-blocks/Blog/Block01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import theme from './_theme'
import styles from './_styles'

const HomePage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props}>
      <Seo title='Home' />
      <ModalWithTabs content={content['authentication']} reverse />
      <ModalWithTabs content={content['contact']} />
      <ModalSimple content={content['advertisement']} />
      <Menu content={content['header']} />
      <Container variant='full' sx={styles.heroContainer}>
        <Hero content={content['hero']} reverse />
      </Container>
      <Container variant='full' sx={styles.featureThreeContainer}>
      <Divider space='5' />
          <Strategies content={content['strategies']} />
        <Divider space='5' />
        <FeatureOne content={content['feature-one']} />
        <FeatureOnetext content={content['feature-one-text']} />
      </Container>
      <Divider space='5' />
      <Container variant='wide' sx={styles.chooseUsContainer}>
        <WhyChooseUs content={content['why-choose-us']} />
      </Container>
      <Divider space='5' />
      <Divider space='5' />
      <Container variant='full' sx={styles.heroContainermarkiting}>
        <Hero2 content={content['hero2']} />
      </Container>
      <Divider space='5' />
      <Container variant='full' sx={styles.buildBrandContainer}>
        <BuildBrand content={content['build-brand']} />
      </Container>
      <Divider space='4' />
      <Divider space='5' />
      <Stats content={content['stats']} />
      <Divider space='5' />
      <Download content={content['download']} />
      <Divider space='5' />
      <Container variant='wide' sx={styles.testimonialsContainer}>
        <Testimonials content={content['testimonials']} />
        <Divider space='5' color='omegaLight' />
        <Companies content={content['companies']} />
      </Container>
      <Divider space='5' />
      <Blog content={content['latest-blogs']} />
       <Divider space='3' />
      <FeatureTwo content={content['feature-two']} reverse />
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query miscIndexBlockContent {
    allBlockContent(
      filter: { page: { in: ["homepage/consulting", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default HomePage
