import React, { useState, useEffect } from 'react';
import { Container } from 'theme-ui';
import Layout from '@solid-ui-layout/Layout';
import Seo from '@solid-ui-components/Seo';
import Divider from '@solid-ui-components/Divider';
import SubHeader from '@solid-ui-blocks/SubHeader/Block01';
import ModalWithTabs from '@solid-ui-blocks/Modal/Block01';
import ModalSimple from '@solid-ui-blocks/Modal/Block02';
import Header from '@solid-ui-blocks/Header/Block01';
import Hero from '@solid-ui-blocks/Hero/Block03';
import Features from '@solid-ui-blocks/Features/Block02';
import FeatureTabOne from '@solid-ui-blocks/FeaturesWithPhoto/Block05';
import FeatureTabTwo from '@solid-ui-blocks/FeaturesWithPhoto/Block06';
import FeatureTabThree from '@solid-ui-blocks/FeaturesWithPhoto/Block11';
import FeatureTabFour from '@solid-ui-blocks/FeaturesWithPhoto/Block09';
import FeatureTabFive from '@solid-ui-blocks/FeaturesWithPhoto/Block10';
import Blog from '@solid-ui-blocks/Blog/Block02';
import Footer from '@solid-ui-blocks/Footer/Block01';
import ContentImages from '@solid-ui-components/ContentImages';
import Menu from '@solid-ui-blocks/Menu';
import CallToAction from '@solid-ui-blocks/CallToAction';
import theme from './_theme';
import styles from './_styles';
import './innerpage.css';

const styled = {
  image: {
    margin: `-50px auto 0px`,
    display: `table`
  },
  image2: {
    margin: `0px auto 0px`,
    display: `table`
  }
};

const InnerPage = props => {
  const [innerData, setinnerData] = useState({});
  const [sharedData, setSharedData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchinnerData = async () => {
      try {
        const [innerRes, sharedRes] = await Promise.all([
          fetch('https://kg2.shahbaz.jt.mumara.dev/api/inner'),
          fetch('https://kg2.shahbaz.jt.mumara.dev/api/shared')
        ]);

        if (!innerRes.ok || !sharedRes.ok)
          throw new Error('Failed to fetch inner or shared data');

        const innerJson = await innerRes.json();
        const sharedJson = await sharedRes.json();

        setinnerData(innerJson || {});
        setSharedData(sharedJson || {});
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchinnerData();
  }, []);

  if (loading) return null; // Yahan null return karna hai takay kuch render na ho loading ke dauran
  if (error) return <div>Error loading content: {error.message}</div>;

  return (
    <Layout theme={theme} {...props}>
      <Seo title="Home" />
      <Menu content={sharedData?.header} />
      <Divider space='3' />

      {innerData['subheader'] && (
        <div className="subheader-block">
          <SubHeader content={innerData?.subheader} menuJustify="space-between" />
        </div>
      )}

      {innerData['hero'] && (
        <Container className="innerpage-herobloc" variant="full" sx={styles.heroContainer}>
          <Hero content={innerData?.hero} />
          <Divider space="5" />
          <div className="innerpage-section bg-light pt-0 pb-0">
            {innerData['images'] && (
              <ContentImages
                content={innerData['images']}
                sx={styled.image}
                imageEffect="fadeIn"
              />
            )}
          </div>
        </Container>
      )}

      <FeatureTabOne content={innerData?.featuretabone} reverse />
      <FeatureTabTwo content={innerData?.featuretabtwo} />
      <FeatureTabThree content={innerData?.featuretabthree} reverse />
      <FeatureTabFour content={innerData?.featuretabfour} />
      <FeatureTabFive content={innerData?.featuretabfive} reverse />

      {innerData['features'] && (
        <Container variant="full" sx={styles.featuresContainer}>
          <Features content={innerData?.features} />
        </Container>
      )}

      <Blog content={innerData?.latestblogs} />

      <CallToAction
        bg="success"
        content="Ready to Get Started with Mumara Campaigns"
        btname="Buy Now"
        link="/campaigns/pricing/"
      />

      <Footer content={sharedData?.footer} />
    </Layout>
  );
};

export default InnerPage;
