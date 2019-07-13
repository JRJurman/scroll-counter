import { registerHtml, useState } from 'tram-one'
import './CounterLabel.scss'
const html = registerHtml()

export default () => {
  const [label, setLabel] = useState('')
  const onChangeInput = (event) => setLabel(event.target.value)
  return html`
    <input class="CounterLabel" placeholder="Counter" value=${label} onchange=${onChangeInput} />
  `
}
