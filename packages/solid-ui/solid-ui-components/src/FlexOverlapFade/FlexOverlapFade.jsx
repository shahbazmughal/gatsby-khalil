import React from 'react'
import { Box } from 'theme-ui'

const FlexOverlapFade = ({ direction }) => (
  <Box
    sx={{
      display: [`none`, `block`, null, `none`],
      position: `absolute`,
      top: `-25%`,
      left: direction === 'ltr' ? '-50%' : '0',
      zIndex: 0,
      size: `100%`
    }}
  />
)

export default FlexOverlapFade

FlexOverlapFade.defaultProps = {
  direction: 'ltr'
}
