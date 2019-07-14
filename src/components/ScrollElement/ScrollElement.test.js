import ScrollElement from './ScrollElement'

describe('ScrollElement', () => {
  describe('with default props', () => {
    const wrapper = ScrollElement({ counterId: 0, value: 20 })

    it('should match snapshot', () => {
      expect(wrapper.outerHTML).toMatchSnapshot()
    })
  })
})
