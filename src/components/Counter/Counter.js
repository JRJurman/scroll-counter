import { registerHtml } from 'tram-one'
import ScrollCounter from '../ScrollCounter'
import CounterLabel from '../CounterLabel'
import ScrollCover from '../ScrollCover'
import './Counter.scss'

const html = registerHtml({
  CounterLabel,
  ScrollCounter,
  ScrollCover
})

export default ({ id, color }) => {
  const counterStyle = `
    background: ${color};
  `
  return html`
    <div class="Counter" style=${counterStyle}>
      <CounterLabel counterId=${id}/>
      <ScrollCounter counterId=${id}/>
      <ScrollCover color=${color} />
    </div>
  `
}
