import { registerHtml, useState, useEffect } from 'tram-one'
import ScrollElement from '../ScrollElement'
import './ScrollCounter.scss'
const html = registerHtml()

const totalRange = 200

export default ({ counterId, defaultValue=0 }) => {
  const [scrollValue, setScrollValue] = useState(defaultValue)

  // scroll to the scrollValue on mount
  useEffect(() => {
    const scrollValueIntoView = value => document.querySelector(`[counter-id="${counterId}"][value="${value}"]`).scrollIntoView()
    // because we can see 3 elements at a time
    // scroll so that we can see the one before and after our value
    scrollValueIntoView(scrollValue-1)
    scrollValueIntoView(scrollValue+1)
  })

  // build a list of ScrollElements
  const range = [...Array(totalRange)].map((_, value, total) => ScrollElement({ counterId, value: -(total.length/2)+value }))

  // create event listener to update on scroll value
  const onScroll = (event) => {
    // determine the calculatedScrollValue of the scroll
    const scrollElement = event.target
    const { scrollWidth, scrollLeft } = scrollElement
    const calculatedScrollValue = Math.round((scrollLeft/scrollWidth)*totalRange) - (totalRange/2)

    // log and update the scroll value
    console.log(calculatedScrollValue)
    // setScrollValue(calculatedScrollValue)
  }

  return html`
    <div class="ScrollCounter" onscroll=${onScroll}>
      ${range}
    </div>
  `
}
