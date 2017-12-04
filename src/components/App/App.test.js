import React from 'react'
import { mount } from 'enzyme'
import App from 'components/App/App'

describe('<App />', () => {
    it ('should match snapshots', () => {
      const wrapper = mount (<App />)

      expect(wrapper).toMatchSnapshot()
    })
})

