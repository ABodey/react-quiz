import React from 'react'
import { shallow } from 'enzyme'
import Root from 'components/Root/Root'

describe('<Root />', () => {
    it ('should match snapshots', () => {
      const wrapper = shallow (<Root />)

      expect(wrapper).toMatchSnapshot()
    })
})
