import React from "react"
import Image from "gatsby-image"
import styles from "../../css/tour.module.css"
import { Link } from "gatsby"
import { FaMap } from "react-icons/fa"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
// Get a default image just in case no images where found
const getImage = graphql`
  query {
    file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Tour = ({ tour }) => {
  const data = useStaticQuery(getImage)
  // do some destructuring using curly braces
  const { name, price, country, days, slug, images } = tour
  const img = data.file.childSharpImage
  // In case no images have been found then use
  // the default image
  let mainImage = images ? images[0].fluid : img

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt="single tour" />
        <Link className={styles.link} to={`/tours/${slug}`}>
          details
        </Link>
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} />
            {/* Note using a default when null value  */}
            {country || "default country"}
          </h4>
          <div className={styles.details}>
            <h6>{days} days</h6>
            <h6>from ${price}</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

// Determine if a simple property is empty so
// as to fix with a default value
// As is it will give a warning in the console log
// so you can detect missing data
Tour.propTypes = {
  tour: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
}
export default Tour
