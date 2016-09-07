import React from 'react';

import Note from '../../src/components/Note';

import {
  mount,
  shallow
} from 'enzyme'

describe('(Component) Note', () => {
  const wrapper = shallow(<Note>Hello</Note>)

  it('should contain "Hello"', () => {
    expect(wrapper.contains(<li>Hello</li>)).to.equal(true)
  })

});
