import React from 'react'
import { Box, Link as ThemeLink } from 'theme-ui'
import gatsbySVG from '../../assets/download.png'

const styles = {
  link: {
    display: `inline-flex`,
    alignItems: `center`,
    color: `heading`,
    fontWeight: `medium`,
    textDecoration: `none`,
    ':visited': {
      color: `heading`
    },
    ':hover': {
      color: `#663399`
    },
    img: {
      height: 24,
    }
  }
}

const PoweredByGatsby = () => {
  return (
    <Box pb={1} mb={2} mt={[2, 0]}>
      <ThemeLink
        href="https://www.dmca.com/Protection/Status.aspx?ID=994c3354-60b0-4def-8dfa-882e801d2cbc&cdnrdr=1&refurl=https://www.mumara.com/"
        target="_blank"
        rel="noopener noreferrer"
        sx={styles.link}
      >
        <img src={gatsbySVG} alt="Gatsby Logo" style={styles.link.img} />
      </ThemeLink>
    </Box>
  )
}

export default PoweredByGatsby
