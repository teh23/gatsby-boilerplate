import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import Layout from '../components/Layout'

interface Props {
  data: {
    albums: {
      thumbnailUrlLocal: IGatsbyImageData
    }
  }
}

const IndexPage: React.FunctionComponent<Props> = ({ data }) => {
  return (
    <Layout title="Main page" description="Description main page">
      <main className="flex flex-col justify-center items-center w-full h-[calc(100vh-4rem)] space-y-4">
        <p className="text-3xl">
          Hello, <span className="font-bold">World!</span>
        </p>
        <GatsbyImage image={getImage(data.albums.thumbnailUrlLocal)!} alt="test image" />
      </main>
    </Layout>
  )
}
export const query = graphql`
  query indexQuery {
    albums {
      thumbnailUrlLocal {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`
export default IndexPage
