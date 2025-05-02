import React from 'react'
import { Box, Link } from 'theme-ui'
import { Link as GLink } from 'gatsby'
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
      <GLink to="/" style={styles.link}>
        <img src={gatsbySVG} alt="Gatsby Logo" style={styles.link.img} />
      </GLink>
    </Box>
  )
}

export default PoweredByGatsby
