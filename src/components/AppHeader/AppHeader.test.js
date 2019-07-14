import AppHeader from './AppHeader'

describe('AppHeader', () => {
  describe('with default props', () => {
    const wrapper = AppHeader()

    it('should match snapshot', () => {
      expect(wrapper.outerHTML).toMatchSnapshot()
    })
  })
})
