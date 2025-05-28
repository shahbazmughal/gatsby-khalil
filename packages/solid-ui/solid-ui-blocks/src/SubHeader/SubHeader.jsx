import React from 'react'
import Sticky from 'react-sticky-el'
import { Container, Box, Flex, css } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'
import './campsubheader.css'


const styles = {
  wrapper: {
    position: `relative`,
    zIndex: 10,
    '.nav-container': {
      bg: `#403c56`,
      color: `#d3e4ff`,
      position: `relative`,
      transition: `all 250ms ease-in`,
      // overflow: `hidden`,
      py: 3
    },
    '.nav-sticky .nav-container': {
      bg: `headerActiveBg`,
      boxShadow: `0 0 25px rgba(140,152,164,.25)`,
      py: [1, null, 1],
      '.button-group-link.level-1, button-group-link.level-1:visited': {
        color: `headerActiveColor`
      }
    },
    //Make buttons in header smaller
    '.button-group-button': {
      minWidth: 80,
      fontSize: "12px",
      px: "8px",
      py: "2px"
    }
  },
  header: {
    justifyContent: `end`,
    alignItems: `right`
    // height: [`6rem`, `7rem`], //prevent layout shift
  },
  desktopMenu: {
    display: [`block`, null, `block`],
    minWidth: `auto`,
    flexGrow: 1,
    color: `#d3e4ff`,
  },
  mobileMenu: {
    display: [`block`, null, `block`],
    color: `#d3e4ff`,
  }
}

const SubHeader = ({ content: { images, collection }, menuJustify }) => {
  return (
    <div className="subheader-main">
      
        <Container variant='full' className='nav-container'>
          <Container px='2'>
            <Flex sx={styles.header}>
              {collection && (
                <>
                  <Box sx={styles.desktopMenu}>
                    <Reveal effect='fadeInDown'>
                      <Flex
                        sx={{
                          alignItems: `center`,
                          justifyContent: `end`
                        }}
                      >
                        {collection.map(
                          ({ buttons }, index) =>
                            buttons && (
                              <Box
                                key={`item-${index}`}
                                sx={{
                                  '& + &': {
                                    ml: 2
                                  }
                                }}
                              >
                                <ContentButtons content={buttons} />
                              </Box>
                            )
                        )}
                      </Flex>
                    </Reveal>
                  </Box>
                </>
              )}
            </Flex>
          </Container>
        </Container>
    </div>
  )
}

SubHeader.defaultProps = {
  menuJustify: `end`
}

export default WithDefaultContent(SubHeader)
