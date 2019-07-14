import AddCounter from './AddCounter'

describe('AddCounter', () => {
  describe('with default props', () => {
    const wrapper = AddCounter()

    it('should match snapshot', () => {
      expect(wrapper.outerHTML).toMatchSnapshot()
    })
  })
})
