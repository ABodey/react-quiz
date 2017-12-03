import React from 'react'
import { shallow } from 'enzyme'
import Books from './Books'

describe('<Books />', () => {
    it ('should match snapshots', () => {
      const wrapper = shallow (<Books />)

      expect(wrapper).toMatchSnapshot()
    })
})

