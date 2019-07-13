import { registerHtml } from 'tram-one'
import './ScrollElement.scss'
const html = registerHtml()

export default ({ counterId, value }) => {
  return html`
    <div class="ScrollElement" counter-id=${counterId} value=${value}>
      ${value}
    </div>
  `
}
