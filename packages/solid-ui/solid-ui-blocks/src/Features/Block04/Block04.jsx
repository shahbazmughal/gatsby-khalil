import React from 'react'
import { Container, Flex, Box, css } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import ContentText from '@solid-ui-components/ContentText'
import ContentButtons from '@solid-ui-components/ContentButtons'
import ListItem from '@solid-ui-components/ListItem'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const styles = {
  listItem: {
    flexBasis: [`100%`, `1/2`, null, `1/3`],
    justifyContent: `left`,
    p: 3
  }
}

const FeaturesBlock04 = ({ content: { text, collection, buttons } }) => (
  <Container as={Reveal}>
    <Box sx={{ textAlign: `center`, px: 210 }}>
      <ContentText content={text} />
    </Box>
    {collection && (
      <>
        <Divider />
        <Flex sx={{ flexWrap: `wrap`, mx: -3 }}>
          {collection?.map((props, index) => (
            <Reveal
              key={`item-${index}`}
              effect='fadeInGrow'
              delay={0.15 * (index + 1)}
              css={css(styles.listItem)}
            >
              <ListItem {...props} iconProps={{ size: 'md' }} />
            </Reveal>
          ))}
        </Flex>
      </>
    )}
    {buttons && (
      <>
        <Divider space={3} />
        <ContentButtons content={buttons} />
      </>
    )}
  </Container>
)

export default WithDefaultContent(FeaturesBlock04)
