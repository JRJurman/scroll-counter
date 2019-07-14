import AppControls from './AppControls'

describe('AppControls', () => {
  describe('with default props', () => {
    const wrapper = AppControls()

    it('should match snapshot', () => {
      expect(wrapper.outerHTML).toMatchSnapshot()
    })
  })
})
