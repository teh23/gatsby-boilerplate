import React from 'react'
import { Helmet } from 'react-helmet'
import config from '../../config'

interface Props {
  title?: string
  description?: string
  img?: string
  location?: Location
}

const SEO: React.FunctionComponent<Props> = ({
  title,
  description,
  img,
  location,
}): JSX.Element => (
  <Helmet>
    <title itemProp="name" lang="en">
      {title || config.title}
    </title>
    <meta name="description" content={`${description || config.description}`} />
    <meta property="og:type" content={config.ogType} />
    <meta property="og:descrption" content={`${description || config.description}`} />
    <meta property="og:url" content={`${config.siteUrl}${location && location?.pathname}`} />
    <meta property="og:site_name" content={`${title || config.title}`} />
    <meta property="article:section" content={config.title} />
    <meta property="og:url" content={`${config.siteUrl}`} />
    <meta property="og:image" content={`${img || config.featuredImage}`} />
    <meta property="og:image:secure_url" content={`${img || config.featuredImage}`} />
    <meta property="article:author" content={config.facebook} />
    <meta property="article:publisher" content={config.facebook} />
    <meta property="twitter:url" content={`${config.siteUrl}${location && location?.pathname}`} />
    <meta property="twitter:creator" content={config.twitter} />
    <meta property="twitter:title" content={`${title || config.title}`} />
    <meta property="twitter:card" content={config.twitterCard} />
    <meta property="twitter:image" content={`${img || config.featuredImage}`} />
    <meta property="twitter:image:alt" content={config.twitterImgAlt} />
    <meta property="twitter:description" content={`${description || config.description}`} />
    <html lang={config.lang} />
  </Helmet>
)

export default SEO
