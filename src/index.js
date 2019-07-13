import 'babel-polyfill';
import { registerHtml, useState, start } from 'tram-one'
import AddCounter from './components/AddCounter'
import Counter from './components/Counter'
import './styles.css'

const html = registerHtml({
  AddCounter,
  Counter
})

const home = () => {
  const [totalCounters, setTotalCounters] = useState(0)
  const incrementTotalCounters = () => setTotalCounters(totalCounters + 1)

  const defaultColors = [
    "#F8CA9D", "#8EC9BB", "#C5D7C0", "#FB8E7E", "#F2CF59", "#FA6E4F"
  ]

  const counters = [...Array(totalCounters)].map(
    (_, counterId) => Counter({id: counterId, color: defaultColors[counterId % defaultColors.length]})
  )

  return html`
    <div class="Page">
      ${counters}
      <AddCounter onclick=${incrementTotalCounters}/>
    </div>
  `
}

start('#app', home)
