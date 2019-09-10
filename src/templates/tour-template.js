import React from "react"
import { graphql } from "gatsby"

const Template = ({ data }) => {
  const {
    name,
    price,
    country,
    days,
    description: { description },
    images,
    start,
    journey,
  } = data.tour
  // extract one image to mainImage
  // and the other ones to tourImages
  // using the ... operator
  const [mainImage, ...tourImages] = images

  return <div>{name}</div>
}

// Dynamic query to retrieve a single tour
// using the slug as a parameter
// Note: pass the parameter with a dollar sign and
// type, in this case String
export const query = graphql`
  query($slug: String!) {
    tour: contentfulTour(slug: { eq: $slug }) {
      name
      price
      country
      days
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      start(formatString: "dddd MMMM Do, YYYY")
      journey {
        day
        info
      }
      description {
        description
      }
    }
  }
`

export default Template
