import React from 'react';
import { Link as GLink } from 'gatsby';
import { Container, Box, Flex } from 'theme-ui';
import ContentText from '@solid-ui-components/ContentText';
import PoweredByGatsby from '@solid-ui-components/PoweredByGatsby'
import ContentImages from '@solid-ui-components/ContentImages';
import ContentButtons from '@solid-ui-components/ContentButtons';
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent';

const styles = {
  wrapper: {
    position: 'relative',
    bg: 'footerBg'
  },
  footer: {
    flexDirection: ['column-reverse', 'row'],
    justifyContent: 'space-between',
    alignItems: ['center', 'flex-start'],
    py: 5
  }
};

const FooterBlock01 = ({ content: { images, collection,image2 } }) => {
  return (
    <Box sx={styles.wrapper}>
      <Container px={4}>
        <Flex sx={styles.footer}>
          {/* Left Column */}
          <Box sx={{ minWidth: 200 }}>
            {/* Logo / Image */}
            <Box pb={1} mb={2} mt={[2, 0]}>
              <GLink to="/">
                <ContentImages content={{ images }} imageEffect="fadeIn" />
              </GLink>
            </Box>

            {/* Description Text */}
            <Box pt={2} mb={[1, 1]} sx={{ maxWidth: 300 }}>
              Welcome to Mumara App Store, it started after the immense success of the Self-Hosted edition of Mumara Email, largely accepted worldwide.
            </Box>

            {/* Copyright */}
            <Box pt={2} mb={[2, 1]}>
              © {new Date().getFullYear()}, All Rights Reserved.
            </Box>
            {/* second image add */}
          <Box>
          <PoweredByGatsby />
          </Box>
          </Box>
          
          {/* Right Column - Menu Collection */}
          {collection?.map(({ text, buttons }, index) =>
            buttons ? (
              <Box key={`item-${index}`} mb={3}>
                <ContentText
                  content={text?.[0]}
                  variant="h5"
                  sx={{ display: ['none', 'block'] }}
                />
                <ContentButtons
                  content={buttons}
                  variant="vertical"
                  wrapperStyles={{
                    flexDirection: [null, 'column'],
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                  }}
                />
              </Box>
            ) : null
          )}
        </Flex>
      </Container>
    </Box>
  );
};

FooterBlock01.defaultProps = {
  menuJustify: 'flex-end'
};

export default WithDefaultContent(FooterBlock01);
