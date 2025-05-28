import React, { useState, useEffect } from 'react';
import { Container } from 'theme-ui';
import Layout from '@solid-ui-layout/Layout';
import Seo from '@solid-ui-components/Seo';
import Divider from '@solid-ui-components/Divider';
import ModalWithTabs from '@solid-ui-blocks/Modal/Block01';
import ModalSimple from '@solid-ui-blocks/Modal/Block02';
import Header from '@solid-ui-blocks/Header/Block01';
import Hero from '@solid-ui-blocks/Hero/Block01';
import Hero2 from '@solid-ui-blocks/Hero/Block02';
import Companies from '@solid-ui-blocks/Companies/Block01';
import BuildBrand from '@solid-ui-blocks/FeaturesWithPhoto/Block04';
import WhyChooseUs from '@solid-ui-blocks/Features/Block04';
import FeatureTwo from '@solid-ui-blocks/FeaturesWithPhoto/Block03';
import Stats from '@solid-ui-blocks/Stats/Block01';
import Strategies from '@solid-ui-blocks/Features/Block06';
import Download from '@solid-ui-blocks/CallToAction/Block02';
import Testimonials from '@solid-ui-blocks/Testimonials/Block02';
import FeatureOne from '@solid-ui-blocks/FeaturesWithPhoto/Block01';
import Menu from '@solid-ui-blocks/Menu';
import FeatureOnetext from '@solid-ui-blocks/FeaturesWithPhoto/Block08';
import Blog from '@solid-ui-blocks/Blog/Block01';
import Footer from '@solid-ui-blocks/Footer/Block01';
import theme from './_theme';
import styles from './_styles';

const HomePage = props => {
  const [heroData, setHeroData] = useState(null); // initially null
  const [sharedData, setSharedData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBoth = async () => {
      try {
        const [homeRes, sharedRes] = await Promise.all([
          fetch('https://kg2.shahbaz.jt.mumara.dev/api/home'),
          fetch('https://kg2.shahbaz.jt.mumara.dev/api/shared'),
        ]);

        const homeJson = await homeRes.json();
        const sharedJson = await sharedRes.json();

        setHeroData(homeJson || {});
        setSharedData(sharedJson || {});
      } catch (err) {
        console.error('Error fetching homepage data:', err);
        setHeroData({});
        setSharedData({});
      } finally {
        setLoading(false);
      }
    };

    fetchBoth();
  }, []);

  if (loading) return null; // page blank until data is ready

  return (
    <Layout theme={theme} {...props}>
      <Seo title='Marketing Automation & Customer Engagement Tools' />
      <Menu content={sharedData?.header} />

      <Container variant="full" sx={styles.heroContainer}>
        {heroData?.hero && <Hero content={heroData.hero} reverse />}
      </Container>

      <Divider space='5' />
      <Strategies content={heroData?.strategies} />
      <Container variant='full' sx={styles.featureThreeContainer}>
        <FeatureOne content={heroData?.feature1} reverse />
        <FeatureOnetext content={heroData?.feature1t} />
      </Container>

      <Container variant='wide' sx={styles.chooseUsContainer}>
        <WhyChooseUs content={heroData?.chooseUsContainer} />
      </Container>

      <Divider space='5' />
      <Divider space='5' />
      <Divider space='5' />
      <Container variant='full' sx={styles.heroContainermarkiting}>
        <Hero2 content={heroData?.secondhero} />
      </Container>

      <Divider space='5' />
      <Container variant='full' sx={styles.buildBrandContainer}>
        <BuildBrand content={heroData?.buildbrand} />
      </Container>

      <Divider space='5' />
      <Stats content={heroData?.stats} />
      <Divider space='5' />
      <Download content={heroData?.download} />
      <Divider space='5' />

      <Container variant='wide' sx={styles.testimonialsContainer}>
        <Testimonials content={heroData?.testimonials} />
        <Divider space='5' color='omegaLight' />
        <Companies content={heroData?.companies} />
      </Container>

      <Divider space='5' />
      <Blog content={heroData?.latestblogs} />
      <Divider space='5' />
      <FeatureTwo content={heroData?.featuretwo} reverse />

      <Footer content={sharedData?.footer} />
    </Layout>
  );
};

export default HomePage;
