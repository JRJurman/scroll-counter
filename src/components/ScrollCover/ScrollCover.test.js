import ScrollCover from './ScrollCover'

describe('ScrollCover', () => {
  describe('with default props', () => {
    const wrapper = ScrollCover({ color: '#FFEEDD' })

    it('should match snapshot', () => {
      expect(wrapper.outerHTML).toMatchSnapshot()
    })
  })
})
