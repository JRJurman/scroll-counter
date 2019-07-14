import Counter from './Counter'

describe('Counter', () => {
  describe('with default props', () => {
    const wrapper = Counter({ id: 0, color: '#FFEEDD' })

    it('should match snapshot', () => {
      expect(wrapper.outerHTML).toMatchSnapshot()
    })
  })
})
