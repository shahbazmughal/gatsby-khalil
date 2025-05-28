import React from 'react';
import { Container, Flex, Box, Image } from 'theme-ui';
import Reveal from '@solid-ui-components/Reveal';
import Divider from '@solid-ui-components/Divider';
import ContentContainer from '@solid-ui-components/ContentContainer';
import ContentText from '@solid-ui-components/ContentText';
import ContentButtons from '@solid-ui-components/ContentButtons';
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent';

const styles = {
  imageBox: (bg) => ({
    bg: bg || 'muted',
    borderRadius: 'circle',
    width: 100,
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    mx: 'auto',
  }),
  featureItem: {
    flexBasis: ['100%', '50%', null, '25%'],
    padding: 3, // Increased padding for better spacing
  },
  contentContainer: {
    textAlign: 'center', // Center the content within each item
  },
  image: {
    maxWidth: '100%', // Ensure image doesn't overflow
    height: 'auto',
  },
};

const FeaturesBlock06 = ({ content: { text = [], collection, buttons } }) => (
  <Container sx={{ textAlign: 'center', px: [3, 4, 5] }}> {/* Added horizontal padding to the container */}
    <Box>
      <ContentText content={text} />
    </Box>

    {collection && (
      <>
        <Divider />
        <Reveal effect="fadeInDown">
          <Flex
            sx={{
              justifyContent: 'center',
              flexWrap: ['wrap', 'wrap', 'nowrap'], // Allow wrapping on smaller screens
              overflowX: ['auto', 'unset'], // Enable horizontal scrolling on small screens if needed
              mt: 4, // Added some top margin for spacing
            }}
          >
            {collection.map(({ icon, text }, index) => (
              <Box
                key={`item-${index}`}
                sx={styles.featureItem}
              >
                <ContentContainer sx={styles.contentContainer}>
                  <Box mb={2}> {/* Added margin-bottom for spacing between image and text */}
                    {icon?.src && (
                      <Box sx={styles.imageBox(icon?.bg)}>
                        <Image
                          src={icon.src}
                          alt={text?.[0]?.text || 'Feature'}
                          sx={styles.image}
                        />
                      </Box>
                    )}
                  </Box>
                  <ContentText content={text} sx={{ textAlign: 'center' }} /> {/* Center text within each item */}
                </ContentContainer>
              </Box>
            ))}
          </Flex>
        </Reveal>
      </>
    )}
  </Container>
);

export default WithDefaultContent(FeaturesBlock06);