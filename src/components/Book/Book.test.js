import React from 'react'
import { shallow } from 'enzyme'
import Book from './Book'

describe('<Book />', () => {
    it ('should match snapshots', () => {
      const wrapper = shallow (<Book />)

      expect(wrapper).toMatchSnapshot()
    })
})

