import React, { useContext } from 'react'
import { css, Image as ThemeImage } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import { ModalContext } from '@solid-ui-components/Modal'
import { TabsContext } from '@solid-ui-components/Tabs'
import { buildLinkProps } from '@solid-ui-components/ContentButtons'

// Shared Image renderer that supports external images too
const ImageComponent = ({ image, sx, ...props }) => {
  if (!image?.src) return null

  const isExternal = typeof image.src === 'string'

  return (
    <ThemeImage
      src={isExternal ? image.src : image.src.publicURL}
      alt={image.alt || ''}
      sx={{
        width: image.width || 'auto',
        maxWidth: image.maxWidth || 'none',
        borderRadius: image.radius === 'lg' ? 8 : image.radius || '0',
        objectFit: image.objectFit || 'contain',
        ...sx
      }}
      {...props}
    />
  )
}

const ContentImages = ({
  content: { images },
  reverse,
  imagePosition,
  objectPosition,
  imageFit,
  imageEffect,
  loading,
  sx
}) => {
  const { setActiveModal } = useContext(ModalContext)
  const { setActiveTab } = useContext(TabsContext)

  if (!images || images.length === 0) return null

  const { link } = images[0] || {}
  const linkProps = link
    ? buildLinkProps({
        content: link,
        setActiveModal,
        setActiveTab
      })?.linkProps
    : {}

  return (
    <>
      {/* Main Image */}
      <Reveal
  effect={imageEffect || (reverse ? 'fadeInRight' : 'fadeInLeft')}
  css={css({
    textAlign:
      imagePosition === 'center'
        ? 'center'
        : reverse
        ? `right`
        : undefined,
    cursor: link ? `pointer` : `unset`
  })}
  {...linkProps}
>
  <ImageComponent
    image={images[0]}
    loading={loading}
    objectPosition={objectPosition}
    objectFit={imageFit}
    sx={sx}
  />
</Reveal>

{images?.slice(1)?.map((image, index) =>
  image.src ? (
    <Reveal
      key={`item-${index}`}
      effect={image.effects?.[0]}
      delay={0.5}
      css={css({
        ...image.position,
        position: `absolute`,
        display: [`none`, `block`],
        zIndex: index + 2
      })}
    >
      <Reveal
        effect={image.effects?.[1]}
        style={{ backfaceVisibility: `hidden` }}
      >
        <ImageComponent image={image} loading={loading} />
      </Reveal>
    </Reveal>
  ) : null
)}

    </>
  )
}

ContentImages.defaultProps = {
  loading: 'lazy'
}

export default ContentImages
