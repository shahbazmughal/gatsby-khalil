import React from 'react'
import { Link as GLink } from 'gatsby'
import { Container, Box, Flex, css } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Drawer from '@solid-ui-components/Drawer'
import ContentButtons from '@solid-ui-components/ContentButtons3'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'
import './menu.css'

const styles = {
  wrapper: {
    position: `relative`,
    zIndex: 10,
    '.nav-container': {
      bg: `headerBg`,
      transition: `all 250ms ease-in`,
      pt: 3
    },
    '.nav-sticky .nav-container': {
      bg: `headerActiveBg`,
      boxShadow: `0 0 25px rgba(140,152,164,.25)`,
      py: [3, null, 2],
      '.button-group-link.level-1, button-group-link.level-1:visited': {
        color: `headerActiveColor`
      }
    },
    '.button-group-button': {
      minWidth: 120,
      fontSize: 1,
      px: 4,
      py: 2
    }
  },
  header: {
    justifyContent: `space-between`,
    alignItems: `center`
  },
  logoContainer: {
    flexShrink: 0,
    mr: [null, null, 3, 5]
  },
  desktopMenu: {
    display: [`none`, null, `block`],
    minWidth: `auto`,
    flexGrow: 1
  },
  mobileMenu: {
    display: [`block`, null, `none`]
  }
}

const Menu = ({ content: { icon = [], collection }, menuJustify }) => {
  const logo = Array.isArray(icon) ? icon[0] : icon

  return (
    <Box enabled="false" stickyClassName="" css={css(styles.wrapper)}>
      <Container variant="full" className="nav-container">
        <Container px="4">
          <Flex sx={styles.header}>
            <Box sx={styles.logoContainer}>
              <GLink to="/">
                {logo?.src && (
                  <Box sx={{ maxWidth: 140 }}>
                    <img
                      src={logo.src}
                      alt={logo.alt || 'Logo'}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </Box>
                )}
              </GLink>
            </Box>

            {collection && (
              <>
                <Box sx={styles.desktopMenu}>
                  <Reveal effect="fadeInDown">
                    <Flex
                      sx={{
                        alignItems: `center`,
                        justifyContent: menuJustify
                      }}
                      className="header-megamenu"
                    >
                      {collection.map(({ buttons }, index) =>
                        buttons ? (
                          <Box
                            key={`item-${index}`}
                            sx={{ '& + &': { ml: 4 } }}
                          >
                            <ContentButtons
                              content={buttons}
                              className="mumara-mega-nav"
                            />
                          </Box>
                        ) : null
                      )}
                    </Flex>
                  </Reveal>
                </Box>

                <Box sx={styles.mobileMenu}>
                  <Drawer buttonStyle={{ svg: { size: 32 } }}>
                    {collection.map(({ buttons }, index) =>
                      buttons ? (
                        <Box
                          key={`item-${index}`}
                          sx={{
                            fontSize: 3,
                            '.button-group-link.level-1, .button-group-link.level-1:visited': {
                              color: `headerActiveColor`,
                            },
                          }}
                        >
                          {buttons.map((button, btnIdx) => (
                            <Flex
                              key={`mobile-btn-${btnIdx}`}
                              sx={{ alignItems: 'center', mb: 2 }}
                            >
                              <img src="" alt="" />
                              <ContentButtons content={[button]} variant="vertical" />
                            </Flex>
                          ))}
                        </Box>
                      ) : null
                    )}
                  </Drawer>
                </Box>

              </>
            )}
          </Flex>
        </Container>
      </Container>
    </Box>
  )
}

Menu.defaultProps = {
  menuJustify: `flex-end`
}

export default WithDefaultContent(Menu)
