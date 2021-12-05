import * as React from "react"
import PropTypes from "prop-types"
import Menu from "../Menu"

import * as classes from "./Layout.module.scss"

const Layout = ({ children }) => {
  console.log(classes)
  return (
    <>
      <div className="container position-absolute">
        <div className="row align-items-center justify-content-between min-full-height">
          <section
            className={"col-4 col-lg-3 d-none d-md-block " + classes.menu}
          >
            <Menu />
          </section>
          <hr className={"d-none d-lg-block " + classes.separator} />
          <main
            id="scrollContainer"
            className={"col-12 col-md-8 full-height " + classes.content}
          >
            {children}
          </main>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
