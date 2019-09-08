import React from "react"
import TourList from "./TourList"
import { useStaticQuery, graphql } from "gatsby"

const getTours = graphql`
  query {
    tours: allContentfulTour {
      edges {
        node {
          name
          price
          slug
          country
          contentful_id
          days
          images {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`
const Tours = () => {
  return (
    <div>
      hello from Tours
      <TourList />
    </div>
  )
}

export default Tours
