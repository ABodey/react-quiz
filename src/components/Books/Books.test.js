import React from 'react'
import { mount } from 'enzyme'
import Books from 'components/Books/Books'

describe('<Books />', () => {
    it ('should match snapshots', () => {
      const wrapper = mount (<Books />)

      expect(wrapper).toMatchSnapshot()
    })
})

