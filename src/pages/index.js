import React from "react"
import { Link } from "gatsby"
// Encompassing layout
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"

// content between the Layout tags is know as children
// and passed to a sush to the layout component
// Import icon from fontawsom using react-icons
// import { FaBeer } from "react-icons/fa"

export default () => (
  <Layout>
    <SimpleHero>
      <Banner
        title="continue exploring"
        info="Following John Smilga's course on Gatsby Development"
      >
        <Link to="/tours" className="btn-white">
          explore tours
        </Link>
      </Banner>
    </SimpleHero>
    <About />
    <Services />
  </Layout>
)
