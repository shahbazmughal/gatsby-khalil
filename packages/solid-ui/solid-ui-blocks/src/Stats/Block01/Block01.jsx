import React from 'react'
import { Container, Flex, Box, Text } from 'theme-ui'
import Divider from '@solid-ui-components/Divider'
import ContentContainer from '@solid-ui-components/ContentContainer'
import ContentText from '@solid-ui-components/ContentText'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const styles = {
  listItem: {
    flexBasis: ['100%', null, '50%'],
    textAlign: 'left',
    p: [2, 4],
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderColor: 'muted',
    borderRight: ['none', null, '1px solid rgba(113, 128, 150, 0.2)'],
    '&:nth-of-type(2)': {
      borderRight: 'none'
    }
  },
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: 3,
    mb: 2
  },
  iconBox: {
    width: 60,
    height: 60,
    borderRadius: '20%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  iconImage: {
    width: 32,
    height: 32,
    display: 'block',
  },
  buttonWrapper: {
    mt: 2,
    mb: 3
  }
}

const StatsBlock01 = ({ content: { text, container, collection, buttons } }) => (
  <Container sx={{ textAlign: 'center' }}>
    <ContentContainer content={container} variant='cards.paper-lg'>
      <ContentText content={text} />

      {collection && (
        <>
          <Divider space={3} />
          <ContentContainer>
            <Flex sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
              {collection.map(({ text, icon, buttons }, index) => (
                <Box key={`item-${index}`} sx={styles.listItem}>
                  <Box sx={styles.iconWrapper}>
                    {icon?.src && (
                      <Box
                        sx={{
                          ...styles.iconBox,
                          bg: icon.bg || 'muted',
                          color: icon.color || 'inherit'
                        }}
                      >
                        <Box
                          as="img"
                          src={icon.src}
                          alt={text?.[0]?.text || 'icon'}
                          sx={styles.iconImage}
                        />
                      </Box>
                    )}
                    <ContentText content={text?.[0]} mb={0} />
                  </Box>

                  <ContentText content={text?.[1]} />

                  {buttons && (
                    <Box sx={styles.buttonWrapper}>
                      <ContentButtons content={buttons} />
                    </Box>
                  )}
                </Box>
              ))}
            </Flex>
          </ContentContainer>
        </>
      )}
    </ContentContainer>
  </Container>
)

export default WithDefaultContent(StatsBlock01)
