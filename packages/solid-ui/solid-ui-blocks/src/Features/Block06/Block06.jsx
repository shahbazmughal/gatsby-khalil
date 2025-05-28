import React from 'react'
import { Container, Flex, Box, Image } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import ContentContainer from '@solid-ui-components/ContentContainer'
import ContentText from '@solid-ui-components/ContentText'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const styles = {
  imageBox: (bg) => ({
    bg: bg || 'muted',
    borderRadius: 'circle',
    width: 120,
    height: 120,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    mx: 'auto',
  })
}

const FeaturesBlock06 = ({ content: { text = [], collection, buttons } }) => (
  <Container sx={{ textAlign: 'center' }}>
    <Box>
      <ContentText content={text} />
    </Box>

    {collection && (
      <>
        <Divider />
        <Reveal effect="fadeInDown">
          <Flex sx={{ justifyContent: 'center', flexWrap: 'wrap' }}>
            {collection.map(({ icon, text }, index) => (
              <Box
              key={`item-${index}`}
              sx={{ flexBasis: ['100%', '50%', null, '25%'], p: 3 }} // 👈 Added padding here
            >
              <ContentContainer>
                <Box>
                  {icon?.src && (
                    <Box sx={styles.imageBox(icon?.bg)}>
                      <Image
                        src={icon.src}
                        alt={text?.[0]?.text || 'Feature'}
                        sx={styles.image}
                      />
                    </Box>
                  )}
                  <ContentText content={text} />
                </Box>
              </ContentContainer>
            </Box>
            
            ))}
          </Flex>
        </Reveal>
      </>
    )}

    {buttons && (
      <>
        <Divider space={3} />
       
      </>
    )}
  </Container>
)

export default WithDefaultContent(FeaturesBlock06)