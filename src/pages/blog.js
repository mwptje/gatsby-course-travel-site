import React from "react"
import { Link } from "gatsby"
// Encompassing layout
import Layout from "../components/Layout"
// graphql import
import { graphql } from "gatsby"

// adding the graphql functionality adds
// the data section to props
// this is called PageQuery
// you can decompose props to data by using the
// const blob = ({data}) => {} construction

const blog = props => {
  return (
    <Layout>
      This is my blog page <Link to="/">Home Page</Link>
      <div>Title: {props.data.site.siteMetadata.title}</div>
      <div>Author: {props.data.site.siteMetadata.author}</div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
export default blog
