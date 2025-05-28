import React from 'react'
import { Box, Flex } from 'theme-ui'
import ContentContainer from '@solid-ui-components/ContentContainer'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import ContentText from '@solid-ui-components/ContentText'

// Icon rendering for custom svg icon (using img tag)
const Icon = ({ icon }) => {
  if (!icon || !icon.src) return null
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        bg: icon.bg || 'transparent',
        color: icon.color || 'inherit',
        width: 64,
        height: 64,
        borderRadius: '8px',
        mr: 0,
        flexShrink: 0,
      }}
    >
      <img src={icon.src} alt="icon" style={{ width: '48px', height: '48px' }} />
    </Box>
  )
}

const styles = {
  wrapper: {
    flex: [`100%`, null, null, 1],
    minWidth: 400,
    maxWidth: [`none`, null, null, 600],
    cursor: `pointer`,
    p: 3,
  },
  card: {
    overflow: `hidden`,
    height: `full`,
  },
  content: {
    alignItems: `stretch`,
    flexDirection: [`row`, null, null, `column`],
    height: `full`,
  },
  body: {
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `center`,
    flex: 1,
  },
}

const BlogBlock02 = ({ content: { collection } }) => (
  <Box
    sx={{
      position: 'relative',
      zIndex: 2,
      width: '100%',
      py: [4, 5],
      backgroundColor: 'white',
      '::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        zIndex: -1,
      },
    }}
  >
    <Divider />
    {collection && (
      <Reveal effect="fadeIn">
        <Flex sx={{ flexWrap: `wrap`, justifyContent: `center`, m: -3 , maxWidth: '1250px', mx: 'auto'}}>
          {collection.map(({ text, icon, container }, index) => (
            <Box key={`item-${index}`} sx={styles.wrapper}>
              <ContentContainer content={container} variant={container?.variant} sx={styles.card}>
                <Flex as="article" sx={styles.content}>
                  {/* Icon and Heading stacked vertically */}
                  <Box sx={{ mb: 3 }}>
                    <Icon icon={icon} />
                    <ContentText content={text?.[0]} mb={0} mt={2} />
                  </Box>

                  {/* Body content */}
                  <Box sx={styles.body}>
                    <ContentText content={text?.[1]} />
                  </Box>
                </Flex>
              </ContentContainer>
            </Box>
          ))}
        </Flex>
      </Reveal>
    )}
  </Box>
)

export default BlogBlock02
