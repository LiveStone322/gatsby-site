import React from "react"

export default function Scroll(props: { value: number; maxValue: number }) {
  const { value = 0, maxValue = 10 } = props

  function getScrollPercentage() {
    return 0
  }

  return (
    <div>
      {value}
      <br />
      {maxValue}
    </div>
  )
}
