import React from "react"
import { Link } from "gatsby"
// Encompassing layout
import Layout from "../components/Layout"

const blog = () => {
  return (
    <Layout>
      This is my blog page <Link to="/">Home Page</Link>
    </Layout>
  )
}

export default blog
