import ScrollCounter from './ScrollCounter'

describe('ScrollCounter', () => {
  describe('with default props', () => {
    const wrapper = ScrollCounter({ counterId: 0 })

    it('should match snapshot', () => {
      expect(wrapper.outerHTML).toMatchSnapshot()
    })
  })
})
