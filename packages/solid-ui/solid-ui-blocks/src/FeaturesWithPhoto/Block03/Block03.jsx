import React from 'react'
import { Box } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import ContentText from '@solid-ui-components/ContentText'
import ContentImages from '@solid-ui-components/ContentImages'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'
import './style.css'

const FeaturesWithPhotoBlock03 = ({ content: { text, buttons, images } }) => (
  <Box
    sx={{
      position: 'relative',
      textAlign: 'center',
      maxHeight: '600px', 
      lineHeight: '1.7',
      overflow: 'hidden',
      width: '100%', 
      px: [3, 4],
      py: [5, 5],
    }}
  >
    {/* Background Image */}
    {images && images[0] && (
      <Box
        className="cta-block"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          overflow: 'hidden'
        }}
      >
        {/* Direct Background Image */}
        <img
          src={images[0]?.src}
          alt="Background"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1
          }}
        />

        {/* Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgb(24, 137, 125)',
            opacity: 0.1, // You can adjust opacity
            zIndex: 2,
          }}
        />
      </Box>
    )}

    {/* Content Section */}
    <Box
      sx={{
        position: 'relative',
        zIndex: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {text && (
      <Reveal effect="fadeInDown">
        <ContentText
          content={text}
          sx={{
            textAlign: 'center',
            width: '100%', 
            maxWidth:'850px',
            mx:'auto'
          }}
        />
      </Reveal>
    )}

      {buttons && (
        <>
          <ContentButtons content={buttons} 
          />
        </>
      )}
    </Box>
  </Box>
)

export default WithDefaultContent(FeaturesWithPhotoBlock03)
