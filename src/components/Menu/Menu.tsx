import React, { useCallback } from "react"
import { scroller } from "react-scroll"
import * as classes from "./Menu.module.scss"

export default function Menu() {
  const scrollToElement = useCallback((elementId: string) => {
    return () => {
      console.log(elementId)

      // Somewhere else, even another file
      scroller.scrollTo(elementId, {
        duration: 500,
        delay: 0,
        smooth: true,
        containerId: "scrollContainer",
        offset: -200, // Scrolls to element + 50 pixels down the page
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
