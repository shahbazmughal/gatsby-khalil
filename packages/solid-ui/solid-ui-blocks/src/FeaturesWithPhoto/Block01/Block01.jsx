import React from 'react'
import { Container, Flex, Box } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import ListItem from '@solid-ui-components/ListItem'
import FlexImage from '@solid-ui-components/FlexImage'
import FlexContent from '@solid-ui-components/FlexContent'
import FlexOverlapFade from '@solid-ui-components/FlexOverlapFade'
import ContentImages from '@solid-ui-components/ContentImages'
import ContentText from '@solid-ui-components/ContentText'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const FeaturesWithPhotoBlock01 = ({
  content: { text, images, collection, bottomText }, // Added bottomText to content
  reverse
}) => (
  <Container sx={{ position: 'relative' }}>

    {/* Top Text */}
    <Box sx={{ textAlign: 'center',width: '100%', maxWidth:'850px',mx:'auto' , py: 5}}> {/* Adjusted mx for responsiveness */}
      <ContentText content={text} />
    </Box>

    {/* Image + List Section */}
    <Flex
  sx={{
    width: '100%',
    mx: 'auto',
    objectFit: 'contain',
    flexDirection: ['column', null, 'row'], 
    alignItems: 'left',
    justifyContent: 'space-between', 
  }}
>
  <FlexContent reverse={reverse} sx={{ width: ['100%', null, '50%'], order: [2, null, 1] }}> {/* Adjust width and order */}
    {collection && (
      <>
        <Divider space={3} />
        <Box sx={{ flexGrow: 1, mr: [0, null, 3] }}> {/* Adjust margin for larger screens */}
          {collection.map((props, index) => (
            <ListItem key={`item-${index}`} {...props} compact />
          ))}
        </Box>
      </>
    )}
  </FlexContent>

  <FlexImage reverse={reverse} sx={{ width: ['100%', null, '50%'], order: [1, null, 2] }}> {/* Adjust width and order */}
    <Box sx={{ width: '100%', maxWidth: '100%', overflow: 'hidden' }}>
      <ContentImages content={{ images }} />
    </Box>
  </FlexImage>
</Flex>

    {/* Bottom Text */}
    
    <FlexOverlapFade direction={reverse ? 'ltr' : 'rtl'} />
  </Container>
)

export default WithDefaultContent(FeaturesWithPhotoBlock01)