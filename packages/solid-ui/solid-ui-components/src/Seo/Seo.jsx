import React from 'react'
import Helmet from 'react-helmet'
import useSiteMetadata from '@blocks-helpers/useSiteMetadata'
import ogimage from './mumara.png'
const fav_icon ='/favicon.ico';

const Seo = ({
  title,
  description,
  excerpt,
  meta,
  keywords,
  author,
  thumbnail,
  image,
  image2,
  icon,
  siteUrl,
  canonical,
  favicon
}) => {
  const site = useSiteMetadata()

  
  const social = (author && author.social) || site.social || []
  const twitter =
    social.find(s => s.name && s.name.toLowerCase() === 'twitter') || {}

  description = excerpt || description || site.description

  thumbnail = thumbnail && thumbnail.hero && thumbnail.hero.src
  const thumbnailUrl =
    thumbnail &&
    (thumbnail.startsWith('//')
      ? thumbnail
      : siteUrl && `${siteUrl}${thumbnail}`)
 
  /**
   * Meta Tags
   */

  const metaTags = [
    { itemprop: 'name', content: title || site.title },
    { itemprop: 'description', content: description },
    { name: 'title', content: title || site.title},
    { name: 'description', content: description },
    { property:"og:locale",  content:"en_US" },
    { property: 'og:type', content: "website" },
    { property: 'og:admins', content: "4242421" },
    { property: 'og:url', content: siteUrl },
    { property: 'og:url', content: "https://www.mumara.com" },
    { property: 'og:title', content: title || site.title },
    { property: 'og:description', content: description },
    { property: 'og:site_name', content: title || site.title },
    { property: 'og:image', content: image || ogimage },
    { property: 'og:image:type', content: "image/png" },
    { property: 'og:image:alt', content: title || site.title },
    { property: 'og:image:width', content: "1200" },
    { property: 'og:image:height', content: "630" },
    { property: 'og:image:url', content: image || image2 },
    { property: 'og:image:secure_url', content: image || image2 },
    { property: 'ia:markup_url', content: "https://www.mumara.com" },
    { property: 'ia:markup_url_dev', content: "https://www.mumara.com" },
    { property: 'ia:rules_url', content: "https://www.mumara.com" },
    { property: 'ia:rules_url_dev', content: "https://www.mumara.com" },

    { property: 'twitter:card', content: 'summary' },
    { property: 'twitter:site', content: title || site.title },
    { property: 'twitter:title', content: title || site.title },
    { property: 'twitter:description', content: description },
    { property: 'twitter:creator', content: twitter.url },
    { property: 'twitter:image', content: image2 || ogimage },
    { property: 'fb:app_id', content: "113398442673835" },
    
    { "http-equiv":'Cache-Control', content: "max-age: 31536000, must-revalidate" },
    { "http-equiv":'Pragma', content: "must-revalidate" },
    { "http-equiv":'Expires', content: "31536000" }
  ]

  if (keywords && keywords.length > 0) {
    metaTags.push({ name: 'keywords', content: keywords })
  }

  if (meta) {
    metaTags.push(meta)
  }

  metaTags.push({ name: 'initial-scale', content: '1.0' })

  return (<>
    <Helmet
      htmlAttributes={{
        lang: 'en'
      }}
      title={title}
      titleTemplate={`%s | ${site.title}`}
      meta={metaTags}
    />
    <Helmet>
      <meta http-equiv="Cache-Control" content="max-age: 31536000, must-revalidate" />
      {/* <link rel="apple-touch-icon" sizes="192x192" href="https://post.mumara.com/images/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="https://post.mumara.com/images/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="https://post.mumara.com/images/favicon-16x16.png" /> */}
      <link rel="icon" href={favicon || fav_icon} type="image/x-icon"  />
      {/* <link rel="icon" href={favicon || fav_icon} type="image/x-icon"  /> */}
      {/* <link rel="icon" href={favIcons} type="image/x-icon"  />
      <link rel="shortcut icon" href={favIcons} type="image/x-icon"  /> */}
      <link rel="canonical" href={canonical} />
      <link rel="website-url" href={siteUrl} />
    </Helmet>
  </>)
}

export default Seo
