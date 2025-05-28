import React from 'react'
import { Container, Box } from 'theme-ui'
import ContentText from '@solid-ui-components/ContentText'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import ContentImages from '@solid-ui-components/ContentImages'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const HeroBlock03 = ({ content: { text, images } }) => (
  <>
    <Container sx={{ textAlign: `center`, width: '100%', maxWidth: '900px', mx: 'auto', lineHeight: '1.5' }}>
      <Divider space={5} />
      <Reveal effect='fadeInDown' >
        <ContentText content={text} />
      </Reveal>

    </Container>
    {images && (
      <>
        <Divider space={4} />
        <Box sx={{ textAlign: `center`, width: '100%', maxWidth: '950px', mx: 'auto' }}>
          <ContentImages
            content={{ images }}
            loading='eager'
            imagePosition='center'
            imageEffect='fadeInUp'
          />
        </Box>
      </>
    )}
    </>
)

export default WithDefaultContent(HeroBlock03)
