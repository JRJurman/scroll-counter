import { registerHtml } from 'tram-one'
import './ScrollCover.scss'
const html = registerHtml()

export default ({ color }) => {
  const coverStyle = `
    background: linear-gradient(to right, ${color}C9 30%, transparent 40%, transparent 60%, ${color}C9 70%);
  `
  return html`
    <div class="ScrollCover" style=${coverStyle} />
  `
}
