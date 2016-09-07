import React from 'react';

import NotesList from '../../src/components/NotesList';

import {
  mount,
  shallow
} from 'enzyme'

describe('(Component) NotesList', () => {

  const wrapper = shallow(<NotesList />)
  const mainTag = wrapper.type()

  it('renders a list of notes', () => {
    //looks at content of wrapper:
    expect(wrapper.contains(<ul></ul>)).to.equal(true);
    //looks at type of tag
    expect(mainTag).to.equal("ul");
  })


})
