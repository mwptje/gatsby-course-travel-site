import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  // use the useStaticQuery graphql interface
  // adding the graphql with backticks and paste
  // the graphql query between the backticks
  // Note: you can also destructure the data by
  // putting a part of the object path between
  // curly braces when assigning
  // const { site } = useStaticQuery(graphql` ..)
  // accessing you then use {site.siteMetadata....}
  // Note: going down to site.siteMetada level
  // const { site:{siteMetadata} } = ..

  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          description
          title
        }
      }
    }
  `)

  // alternative is to create a constant with the query
  // and then use
  const getSiteData = graphql`
    {
      site {
        siteMetadata {
          author
          description
          title
        }
      }
    }
  `
  // then use the getSiteData in useStaticQuery
  // const data = useStaticData(getSiteData)

  return (
    <div>
      <h1>title:{data.site.siteMetadata.title}</h1>
      <h1>author:{data.site.siteMetadata.author}</h1>
    </div>
  )
}

export default Header
