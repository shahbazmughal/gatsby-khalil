import React from 'react'
import { Container, Flex, Box, Image, Grid } from 'theme-ui'
import ContentText from '@solid-ui-components/ContentText'
import Reveal from '@solid-ui-components/Reveal'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'
import ContentIcon from '@solid-ui-components/ContentIcon'
import InlineSVG from 'react-inlinesvg';

const HeroBlock02 = ({ content: { text = [], leftSide = [], rightSideImages = [], buttons } }) => (
  <Container>
    <Grid gap={4} columns={[1, null, 2]} sx={{ alignItems: 'center' }}>
    <Box sx={{ textAlign: ['center', null, 'left'], maxWidth: '80%' }}>
  <Reveal effect="fadeInDown">
    <ContentText content={text} />
  </Reveal>

  {leftSide && (
    <Flex
      sx={{
        flexDirection: 'column',
        alignItems: ['center', null, 'flex-start']
      }}
    >
      {leftSide.map(({ icon, text: itemText }, index) => {
        const isSvg = icon?.src?.toLowerCase().endsWith('.svg');
        return (
          <Reveal key={`left-item-${index}`} effect="fadeInLeft" delay={index * 0.2}>
            <Flex sx={{ alignItems: 'center', mb: 1 }}>
                      {icon?.src && (
                        isSvg ? (
                          <Box sx={{ width: 30, height: 30, mr: 2 }}>
                            <img src={icon.src} alt={icon.alt} style={{width: '100%', height: '100%'}}/>
                          </Box>
                        ) : (
                          <ContentIcon content={icon} size="md" mr={1} />
                        )
                      )}
                      {itemText && <ContentText content={itemText} sx={{ fontSize: 1 }} />}
                    </Flex>
          </Reveal>
        );
      })}
    </Flex>
  )}

  {buttons && (
    <Reveal effect="fadeInUp" delay={0.4}>
      <Flex sx={{ justifyContent: ['center', null, 'flex-start'], mt: 4 }}>
        <ContentButtons content={buttons} />
      </Flex>
    </Reveal>
  )}
</Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
          position: `relative`}}>
        {rightSideImages &&
          rightSideImages.map(({ src, alt, title, position, effects }, index) => (
            <>
              {
                position ?
                <Reveal style={{position: 'absolute', top: position?.top || "auto", bottom: position?.bottom || "auto", left: position?.left || "auto", right: position?.right || "auto"}} key={`right-image-${index}`} effect={effects?.[0]} delay={index * 0.15}><img title={title} effects={effects} src={src} alt={alt} sx={{ maxWidth: '100%', height: 'auto', maxHeight: 200, m: 2, borderRadius: 'md', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} /> </Reveal>
                : <Reveal key={`right-image-${index}`} effect={effects?.[0] || "fadeIn"} delay={index * 0.15}><img title={title} effects={effects} src={src} alt={alt} sx={{ maxWidth: '100%', height: 'auto', maxHeight: 200, m: 2, borderRadius: 'md', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} /></Reveal>
              }
            </>
          ))}
      </Box>
    </Grid>
  </Container>
)

export default WithDefaultContent(HeroBlock02)