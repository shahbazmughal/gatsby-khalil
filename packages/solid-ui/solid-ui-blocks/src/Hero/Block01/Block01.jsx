import React from 'react'
import { Container, Flex, Box, css } from 'theme-ui'
import ContentText from '@solid-ui-components/ContentText'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import ContentImages from '@solid-ui-components/ContentImages'
import QuickSignupForm from '@solid-ui-components/QuickSignupForm'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'
import ListItem from '@solid-ui-components/ListItem'
import Icon from '@solid-ui-components/ContentIcon'

const styles = {
  listItem: {
    flex: `1 1 0`,
    minWidth: 300,
    p: 3
  }
}

const HeroBlock01 = ({
  content: { text = [], images, buttons, form, collection },
  reverse
}) => (
  <Container sx={{ py: [3, 4, 5] }}>
    <Flex
      sx={{
        alignItems: [null, null, null, `center`],
        flexDirection: [
          reverse ? `column-reverse` : `column`,
          null,
          null,
          reverse ? `row-reverse` : `row`
        ]
      }}
    >
      <Box
        sx={{
          flexBasis: [null, null, null, `3/5`],
          [reverse ? 'ml' : 'mr']: [null, null, null, 5],
          position: `relative`,
          textAlign: `center`
        }}
      >
        <ContentImages
          content={{ images }}
          loading='eager'
          reverse={reverse}
          imagePosition='center'
        />
      </Box>
      <Box
        sx={{
          flexBasis: `2/5`,
          textAlign: [`center`, null, null, `left`]
        }}
      >
        <Reveal effect='fadeInDown'>
          <ContentText content={text} />
        </Reveal>
        {collection && (
          <>
            <Flex sx={{ flexWrap: `wrap` }} m={-3}>
              {collection.map(
                ({ text, icon, collection, buttons, container }, index) => (
                  <Reveal
                    key={`item-${index}`}
                    effect='fadeInGrow'
                    delay={0.15 * (index + 1)}
                    css={css(styles.listItem)}
                  >
                      <Icon content={icon} size='md' mr='3' mb='3' />
                      <ContentText content={text?.[0]} />
                      <Flex sx={{ alignItems: `center`, flexWrap: `wrap` }}>
                        <ContentText
                          content={text?.slice(1)}
                          sx={styles.itemDescription}
                          mt={[3, null, 0]}
                        />
                        {collection && (
                          <Box sx={{ flexGrow: 1, mr: [3, null, 0] }}>
                            {collection.map((props, index) => (
                              <ListItem key={`item-${index}`} {...props} compact />
                            ))}
                          </Box>
                        )}
                      </Flex>
                  </Reveal>
                )
              )}
            </Flex>
          </>
        )}
        {buttons && (
          <Reveal
            effect='fadeInRight'
            delay={1}
            css={css({ mb: [4, null, null, 0] })}
          >
            {buttons && (
              <>
                <Divider space={3} />
                <ContentButtons content={buttons} />
              </>
            )}
          </Reveal>
        )}
        {form && (
          <Reveal
            effect='fadeInRight'
            delay={1}
            css={css({ mb: [4, null, null, 0] })}
          >
            <QuickSignupForm {...form} space={3} />
          </Reveal>
        )}
      </Box>
    </Flex>
  </Container>
)

export default WithDefaultContent(HeroBlock01)