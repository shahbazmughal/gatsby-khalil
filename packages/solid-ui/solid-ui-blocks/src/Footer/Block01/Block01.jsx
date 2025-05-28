import React from 'react';
import { Link as GLink } from 'gatsby';
import { Container, Box, Flex, Text } from 'theme-ui'; // ✅ Import Text here
import ContentText from '@solid-ui-components/ContentText';
import PoweredByGatsby from '@solid-ui-components/PoweredByGatsby';
import ContentImages from '@solid-ui-components/ContentImages';
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent';
import Reveal from '@solid-ui-components/Reveal'; 

const styles = {
  wrapper: {
    position: 'relative',
    bg: 'footerBg'
  },
  footer: {
    flexDirection: ['column-reverse', 'row'],
    justifyContent: 'space-between',
    alignItems: ['center', 'flex-start'],
    py: 5,
    gap: [4, 5]
  }
};

const FooterBlock01 = ({ content: { images, collection, image2 } }) => {
  return (
    <Box sx={styles.wrapper}>
      <Container px={4}>
        <Flex sx={styles.footer}>
          {/* Left Column */}
          <Box>
            {/* Logo / Image */}
           <Box pb={1} mb={2} mt={[2, 0]}>
            <Reveal effect="fadeInDown">
              <GLink to="/">
                <img
                  src={images[0].src}
                  width={images[0]?.width}
                  alt="Logo"
                  style={{ display: 'block', maxWidth: '100%' }}
                />
              </GLink>
            </Reveal>
          </Box>


            {/* Description */}
            <Box pt={2} mb={[1, 1]} sx={{ maxWidth: 300 }}>
              Welcome to Mumara App Store, it started after the immense success of the Self-Hosted edition of Mumara Email, largely accepted worldwide.
            </Box>

            {/* Copyright */}
            <Box pt={2} mb={[2, 1]}>
              © {new Date().getFullYear()}, All Rights Reserved.
            </Box>

            {/* Powered By */}
            <Box>
              <PoweredByGatsby />
            </Box>
          </Box>

          {/* Right Column - Menu Collection */}
          <Flex
            sx={{
              gap: [4, 5],
              flexWrap: 'wrap',
              justifyContent: 'flex-end'
            }}
          >
            {collection?.map(({ text, buttons }, index) => (
              <Box key={`section-${index}`} sx={{ minWidth: 150 }}>
                {text?.[0]?.text && (
                  <ContentText
                    content={text?.[0]}
                    variant="h5"
                    sx={{ mb: 3 }}
                  />
                )}

                {buttons?.map((button, idx) => (
                  <Box
                    key={`btn-${idx}`}
                    as="a"
                    href={button.link}
                    target={button.target || '_self'}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      mb: 2,
                      textDecoration: 'none',
                      color: 'inherit'
                    }}
                  >
                    {button.icon && (
                      <Box
                        as="img"
                        src={button.icon.src}
                        alt={button.text}
                        sx={{
                          width: 20,
                          height: 20,
                          objectFit: 'contain'
                        }}
                      />
                    )}
                    <Text variant={button.variant || 'default'}>
                      {button.text}
                    </Text>
                  </Box>
                ))}
              </Box>
            ))}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

FooterBlock01.defaultProps = {
  menuJustify: 'flex-end'
};

export default WithDefaultContent(FooterBlock01);
