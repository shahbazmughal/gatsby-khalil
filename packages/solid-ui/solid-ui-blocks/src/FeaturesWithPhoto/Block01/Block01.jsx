
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
import icon from '@solid-ui-theme/buttons/icon'

const FeaturesWithPhotoBlock01 = ({
  content: { text, images, collection, bottomText }, // Added bottomText to content
  reverse
}) => (
  <Container sx={{ position: 'relative' }}>

    {/* Top Text */}
    <Box sx={{ textAlign: 'center',width: '100%', maxWidth:'850px',mx:'auto' , py: 5}}> 
      <ContentText content={text} />
    </Box>

    {/* Image + List Section */}
    <Flex
  sx={{
    width: '100%',
    mx: 'auto',
    objectFit: 'contain',
    flexDirection: ['column', null, 'row'],
    alignItems: 'flex-start', 
    justifyContent: 'space-between',
    gap: [4, null, 4], 
  }}
>
<FlexContent sx={{ width: ['100%', null, '50%'], order: [2, null, 1] }}>
  {collection && (
    <>
      <Divider space={3} />
      <Box sx={{ flexGrow: 1, mr: [0, null, 3] }}>
        {collection.map((item, index) => (
          <Box
            key={`item-${index}`}
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              mb: 3,
            }}
          >
            {/* Icon */}
            {item.icon?.src && (
              <Box
                as="img"
                src={item.icon.src}
                alt={item.icon.alt || 'icon'}
                sx={{
                  width: 32,
                  height: 32,
                  mr: 2,
                  flexShrink: 0,
                }}
              />
            )}

            {/* Text */}
            <Box>
              {item.text?.map((textItem, i) => (
                <Box
                  as="h4"
                  key={`text-${index}-${i}`}
                  sx={{
                    color: textItem.color || 'inherit',
                    m: 0,
                  }}
                >
                  {textItem.text}
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </>
  )}
</FlexContent>



  <FlexImage sx={{ width: ['100%', null, '50%'], order: [1, null, 2] }}>
    <Box sx={{ width: '100%', maxWidth: '100%' }}>
      <ContentImages content={{ images }} />
    </Box>
  </FlexImage>
</Flex>

    {/* Bottom Text */}
    
    <FlexOverlapFade direction={reverse ? 'ltr' : 'rtl'} />
  </Container>
)

export default WithDefaultContent(FeaturesWithPhotoBlock01)