import CounterLabel from './CounterLabel'

describe('CounterLabel', () => {
  describe('with default props', () => {
    const wrapper = CounterLabel()

    it('should match snapshot', () => {
      expect(wrapper.outerHTML).toMatchSnapshot()
    })
  })
})
