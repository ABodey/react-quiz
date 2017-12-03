import React from 'react'
import { shallow } from 'enzyme'
import AddBook from './AddBook'

describe('<AddBook />', () => {
    it ('should match snapshots', () => {
      const wrapper = shallow (<AddBook />)

      expect(wrapper).toMatchSnapshot()
    })
})

