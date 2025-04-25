import React from 'react'
import { Container, Box } from 'theme-ui'
import ContentText from '@solid-ui-components/ContentText'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const FeaturesWithPhotoBlock01 = ({
  content: { text},
}) => (
  <Container sx={{ position: 'relative' }}>

    {/* Top Text */}
    <Box sx={{ textAlign: 'center',width: '100%', maxWidth:'850px',mx:'auto' , py: 5}}> {/* Adjusted mx for responsiveness */}
      <ContentText content={text} />
    </Box>
    </Container>
)

export default WithDefaultContent(FeaturesWithPhotoBlock01)