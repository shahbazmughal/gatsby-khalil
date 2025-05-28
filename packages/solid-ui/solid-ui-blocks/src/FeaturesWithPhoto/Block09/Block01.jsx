import React from 'react'
import { Flex, Box } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import FlexImage from '@solid-ui-components/FlexImage'
import FlexContent from '@solid-ui-components/FlexContent'
import FlexOverlapFade from '@solid-ui-components/FlexOverlapFade'
import ContentText from '@solid-ui-components/ContentText'
import ContentImages from '@solid-ui-components/ContentImages'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const styles = {
  items: {
    flexWrap: `wrap`,
    mx: [-2, -4],
    '& > div': {
      flex: 1,
      textAlign: [`center`, `unset`]
    }
  }
}

const FeaturesWithPhotoBlock05 = ({
  content: { text, images },
  reverse
}) => (
  <Box sx={{ bg: '#f7f9fa', width: '100%',py: [5, 6] }}>
    <Box sx={{ position: 'relative' }}>
      <Flex
        sx={{
          maxWidth: '1200px',     
          margin: '0 auto',           
          alignItems: 'center',
          flexDirection: [
            reverse ? 'column-reverse' : 'column',
            reverse ? 'row-reverse' : 'row'
          ],
        }}
      >
        <FlexImage reverse={reverse}>
          <ContentImages
            content={{ images }}
            reverse={reverse}
            sx={{
              img: {
                width: 'auto',
                maxWidth: '100%',
                boxShadow: 'none' // Removes any unwanted image shadow
              }
            }}
          />
        </FlexImage>

        <FlexContent reverse={reverse}>
          <Box sx={{
            textAlign: ['center', 'left'],
            width: '100%',
            maxWidth: '550px',     // Limit width, but allow responsiveness
            mx: 'auto'
          }}>
            <ContentText content={text} />
          </Box>
        </FlexContent>
      </Flex>
    </Box>
  </Box>
);


export default WithDefaultContent(FeaturesWithPhotoBlock05)
