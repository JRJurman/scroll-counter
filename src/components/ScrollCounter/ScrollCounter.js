import { registerHtml, useUrlParams, useState, useEffect } from 'tram-one'
import ScrollElement from '../ScrollElement'
import './ScrollCounter.scss'
const html = registerHtml({
  ScrollElement
})

export default ({ counterId }) => {
  const { min = "-100", max = "100", start = "0" } = useUrlParams()

  const counterMin = parseInt(min)
  const counterMax = parseInt(max)

  // scroll to the scrollValue on mount
  useEffect(() => {
    const scrollValueIntoView = value => {
      const targetElement = document.querySelector(`[counter-id="${counterId}"][value="${value}"]`)

      targetElement.nextElementSibling.scrollIntoView()
      targetElement.previousElementSibling.scrollIntoView()
    }
    // because we can see 3 elements at a time
    // scroll so that we can see the one after our value
    scrollValueIntoView(start)
  })

  // build a list of ScrollElements
  const range = [...Array((counterMax + 1) - counterMin)]
    .map((_, index) => index + counterMin)
    .map((value) => ScrollElement({ counterId, value }))

  return html`
    <div class="ScrollCounter">
      <!-- padding before scrollable elements -->
      <ScrollElement counterId=${counterId} value="" />
      <ScrollElement counterId=${counterId} value="" />
      <!-- scrollable elements -->
      ${range}
      <!-- padding following scrollable elements -->
      <ScrollElement counterId=${counterId} value="" />
      <ScrollElement counterId=${counterId} value="" />
    </div>
  `
}
