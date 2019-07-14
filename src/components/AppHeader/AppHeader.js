import { registerHtml } from 'tram-one'
import AppControls from '../AppControls'
import './AppHeader.scss'

const html = registerHtml({
  AppControls
})

export default (props, children) => {
  return html`
    <div class="AppHeader">
      <div class="AppTopContainer">
        <div class="AppTitle">Scroll Counter</div>
        <AppControls />
      </div>
      <div class="AppDescription">
        <a href="https://github.com/jrjurman/scroll-counter">Scroll Counter</a>
        Created By <a href="http://jrjurman.com/">Jesse Jurman</a>
        Made with <a href="https://tram-one.io/">Tram-One</a>
      </div>
    </div>
  `
}
