import React from 'react'
import { Container, Flex, Box, css } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import ContentText from '@solid-ui-components/ContentText'
import ContentImages from '@solid-ui-components/ContentImages'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'
import ContentButtons from '@solid-ui-components/ContentButtons' // Import ContentButtons

const styles = {
  item: {
    '& + &': {
      mt: [3, 5],
    },
  },
  buttonContainer: { // Style for the button container
    textAlign: 'center',
    mt: 5, // Increased top margin (was 4)
  },
}

const FeaturesWithPhotoBlock04 = ({
  content: { text, images, collection, buttons }, // Include buttons in content destructuring
  }) => (
  <Container>
    {text && (
      <Box sx={{ textAlign: `center` }}>
        <ContentText content={text} />
        <Divider />
      </Box>
    )}
    <Flex sx={{ flexDirection: [`column`, `row`], m: -3 }}>
      <Box
        sx={{
          flexBasis: `1/3`,
          alignSelf: `center`,
          textAlign: [`center`, `right`],
          mx: [0, 4],
        }}
      >
        <Reveal effect='fadeInRight'>
          {collection?.slice(0, 3).map(({ text }, index) => (
            <Box key={`item-${index}`} sx={styles.item}>
              <ContentText content={text} />
            </Box>
          ))}
        </Reveal>
      </Box>
      <Box sx={{ flexBasis: `1/3`, position: `relative`, my: [4, 0], mx: 'auto' }}>
        <ContentImages content={{ images }} imageEffect='fadeInUp' />
      </Box>
      <Box
        sx={{
          flexBasis: `1/3`,
          alignSelf: `center`,
          textAlign: [`center`, `left`],
          mx: [0, 4],
        }}
      >
        <Reveal effect='fadeInLeft'>
          {collection?.slice(3, 6).map(({ text }, index) => (
            <Box key={`item-${index}`} sx={styles.item}>
              <ContentText content={text} />
            </Box>
          ))}
        </Reveal>
      </Box>
    </Flex>
    {buttons && (
      <Box sx={styles.buttonContainer}> {/* Render buttons below the Flex container */}
        <Reveal effect='fadeInUp' delay={0.5}>
          <ContentButtons content={buttons} />
        </Reveal>
      </Box>
    )}
  </Container>
)

export default WithDefaultContent(FeaturesWithPhotoBlock04)