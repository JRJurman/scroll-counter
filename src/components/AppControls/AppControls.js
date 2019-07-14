import { registerHtml, useUrlParams } from 'tram-one'
import './AppControls.scss'

const html = registerHtml()

export default (props, children) => {
  const { min = -100, max = 100, start = 0 } = useUrlParams()
  const onChangeMin = (event) => {
    window.location.search = `?min=${event.target.value}&max=${max}&start=${start}`
  }
  const onChangeMax = (event) => {
    window.location.search = `?min=${min}&max=${event.target.value}&start=${start}`
  }
  const onChangeStart = (event) => {
    window.location.search = `?min=${min}&max=${max}&start=${event.target.value}`
  }
  return html`
    <div class="AppControls">
      Min: <input type="number" size="4" placeholder="-100" value=${min} onchange=${onChangeMin} />
      Max: <input type="number" size="4" placeholder="100" value=${max} onchange=${onChangeMax} />
      Start: <input type="number" size="4" placeholder="0" value=${start} onchange=${onChangeStart} />
    </div>
  `
}
