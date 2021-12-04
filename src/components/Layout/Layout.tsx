/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import Menu from "../Menu"

import * as classes from "./Layout.module.scss"

console.log(classes)

const Layout = ({ children }) => {
  return (
    <>
      <div className="container position-absolute">
        <div className="row align-items-center full-height">
          <section className={"col-3 " + classes.menu}>
            <Menu />
          </section>
          <div className={"col-1 " + classes.scroll}>
            |<br />
            |<br />
            |<br />
            |<br />
            |<br />
            |<br />
            |<br />
            |<br />
          </div>
          <main className={"col-8 " + classes.content}>{children}</main>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
