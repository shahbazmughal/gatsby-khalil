import React from 'react'
import { Container, Flex, Box, Text, css } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import ContentText from '@solid-ui-components/ContentText'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const styles = {
  listItem: {
    flexBasis: ['100%', '50%', null, '33.3333%'],
    p: 3
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    mr: 3
  },
  iconImage: {
    width: 44,
    height: 44,
    objectFit: 'contain'
  }
}

const FeaturesBlock04 = ({ content: { text, collection } }) => (
  <Container as={Reveal}>
    <Box sx={{ textAlign: 'center', width: '100%', maxWidth: '850px', mx: 'auto' }}>
      <ContentText content={text} />
    </Box>

    {collection && (
      <>
        <Divider />
        <Flex sx={{ flexWrap: 'wrap', mx: -3 }}>
          {collection.map(({ text, icon }, index) => (
            <Reveal
              key={`item-${index}`}
              effect='fadeInGrow'
              delay={0.15 * (index + 1)}
              css={css(styles.listItem)}
            >
              <Flex>
                <Box
                  sx={{
                    ...styles.iconBox,
                    color: icon?.color || '#0f977e'
                  }}
                >
                  <Box
                    as="img"
                    src={icon?.src}
                    alt={text?.[0]?.text || 'feature icon'}
                    sx={styles.iconImage}
                  />
                </Box>
                
                <Box>
                  {text?.[0] && (
                    <Text
                      as="h5"
                      sx={{
                        color: text[0].color || 'white',
                        fontSize: text[0].variant === 'h5' ? 3 : 2,
                        fontWeight: 'bold',
                        mb: 1
                      }}
                    >
                      {text[0].text}
                    </Text>
                  )}

                  {text?.[1] && (
                    <Text
                      sx={{
                        color: text[1].color || '#a0aec0',
                        fontSize: 1,
                        lineHeight: '1.5'
                      }}
                    >
                      {text[1].text}
                    </Text>
                  )}
                </Box>
              </Flex>
            </Reveal>
          ))}
        </Flex>
      </>
    )}

    <Divider space={3} />
  </Container>
)

export default WithDefaultContent(FeaturesBlock04)
