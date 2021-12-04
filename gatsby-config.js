module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'gatsby-boilerplate',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `@teh23/gatsby-source-api`,
      options: {
        url: 'https://jsonplaceholder.typicode.com/albums/1/photos',
        baseType: 'albums',
        images: ['url', 'thumbnailUrl'],
        schema: `
          type albums implements Node {
            albumId: Int
            id: Int
            title: String
            url: String
            thumbnailUrl: String
            urlLocal: File @link(by: "id", from: "urlLocal___NODE")
            thumbnailUrlLocal: File @link(by: "id", from: "thumbnailUrlLocal___NODE")
          }
        `,
      },
    },
  ],
}
