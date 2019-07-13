import { registerHtml } from 'tram-one'
import './AddCounter.scss'

const html = registerHtml()

export default (props) => {
  return html`
    <button class="AddCounter" ${props} >
      +
    </button>
  `
}
