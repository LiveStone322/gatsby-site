import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import * as classes from "./index.module.scss"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />

      <section className={`${classes.slide} ${classes.slide1}`} id="about-me">
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
      </section>

      <section className={`${classes.slide} ${classes.slide2}`} id="works">
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
      </section>

      <section className={`${classes.slide} ${classes.slide3}`} id="contacts">
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
      </section>
    </Layout>
  )
}

export default IndexPage
