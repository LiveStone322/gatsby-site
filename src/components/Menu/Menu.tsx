import React from "react"
import * as classes from "./Menu.module.scss"

export default function Menu() {
  return (
    <div className={classes.menu}>
      <span>{"const menu = () => {"}</span>
      <ul>
        <li>обоМне();</li>
        <li>моиРаботы();</li>
        <li>контакты();</li>
      </ul>
      <span>{"};"}</span>
    </div>
  )
}
