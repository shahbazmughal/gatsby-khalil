import React from 'react'
 import { Container, Flex, Box, css } from 'theme-ui'
 import Reveal from '@solid-ui-components/Reveal'
 import Divider from '@solid-ui-components/Divider'
 import ContentText from '@solid-ui-components/ContentText'
 import ContentButtons from '@solid-ui-components/ContentButtons'
 import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

 const styles = {
  logo: {
  width: 'auto', // Adjusted width for better fit
  height: 'auto', // Maintain aspect ratio
  objectFit: 'contain',
  transition: 'opacity 0.3s ease-in-out',
  '&:hover': {
  opacity: 1, // Increase opacity on hover
  },
  },
  container: {
  textAlign: 'center', // Added some padding top and bottom
  },
  flex: {
  flexWrap: 'wrap',
  justifyContent: 'center', // Center the logos
  },
  box: {
  flexGrow: 1,
  textAlign: 'center',
  },
 }

 const CompaniesBlock01 = ({ content }) => {
  const { text, collection, buttons } = content

  return (
  <Container sx={styles.container}>
  <ContentText content={text} />
  {text && collection && <Divider sx={{ my: 3 }} />} {/* Added margin to the divider */}
  <Flex sx={styles.flex}>
  {collection?.map(({ text, icon }, index) => (
  <Box key={`item-${index}`} sx={styles.box}>
  <Reveal
  effect='fadeInGrow'
  delay={0.2 * (index + 2)}
  title={text?.[0]?.text}
  >
  {icon?.src ? (
  <img src={icon.src} css={css(styles.logo)} alt={text?.[0]?.text || 'Company Logo'} />
  ) : (
  <ContentText content={text?.[0]} variant='h' mb='0' />
  )}
  </Reveal>
  </Box>
  ))}
  </Flex>
  {buttons && (
  <>
  <Divider sx={{ my: 3 }} /> {/* Added margin to the divider */}
  <ContentButtons content={buttons} />
  </>
  )}
  </Container>
  )
 }

 export default WithDefaultContent(CompaniesBlock01)