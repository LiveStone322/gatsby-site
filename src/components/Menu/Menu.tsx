import React, { useCallback } from "react"
import { scroller } from "react-scroll"
import * as classes from "./Menu.module.scss"

export default function Menu() {
  const scrollToElement = useCallback((elementId: string) => {
    return () => {
      scroller.scrollTo(elementId, {
        duration: 500,
        delay: 0,
        smooth: "easeInOutCubic",
        containerId: "scrollContainer",
        offset: 0,
      })
    }
  }, [])

  return (
    <nav className={classes.menu}>
      <span>{"const menu = () => {"}</span>
      <ul>
        <li>
          <a onClick={scrollToElement("about-me")}>обоМне();</a>
        </li>
        <li>
          <a onClick={scrollToElement("works")}>моиРаботы();</a>
        </li>
        <li>
          <a onClick={scrollToElement("contacts")}>контакты();</a>
        </li>
      </ul>
      <span>{"};"}</span>
    </nav>
  )
}
