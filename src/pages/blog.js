import React from "react"
// Encompassing layout
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

// adding the graphql functionality adds
// the data section to props
// this is called PageQuery
// you can decompose props to data by using the
// const blob = ({data}) => {} construction

const blog = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.blogBcg.childImageSharp.fluid} />
    </Layout>
  )
}

export default blog

export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
