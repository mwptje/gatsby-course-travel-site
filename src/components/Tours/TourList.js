import React, { Component } from "react"
import styles from "../../css/items.module.css"
import Tour from "./Tour"
import Title from "../Title"

export default class TourList extends Component {
  // setting the initial state
  state = {
    tours: [],
    sortedTours: [],
  }
  // then setting the state props to the value
  // of the graphql query once loaded so you
  // can use the lists instead of the query response
  // so as to sort or filter
  componentDidMount() {
    this.setState({
      tours: this.props.tours.edges,
      sortedTours: this.props.tours.edges,
    })
  }

  render() {
    return (
      <section className={styles.tours}>
        <Title title="our" subtitle="tours" />
        <div className={styles.center}>
          {/* We are accessing the state */}
          {this.state.sortedTours.map(({ node }) => {
            return <Tour key={node.contentful_id} tour={node} />
          })}
        </div>
      </section>
    )
  }
}
