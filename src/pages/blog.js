import React from "react"
import { Link } from "gatsby"
// Encompassing layout
import Layout from "../components/Layout"
import Images from "../examples/Images"

// adding the graphql functionality adds
// the data section to props
// this is called PageQuery
// you can decompose props to data by using the
// const blob = ({data}) => {} construction

const blog = props => {
  return (
    <Layout>
      This is my blog page <Link to="/">Home Page</Link>
      <Images />
    </Layout>
  )
}

export default blog
