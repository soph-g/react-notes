import React from 'react';

import NotesList from '../../src/components/NotesList';
import Note from '../../src/components/Note';

import {
  mount,
  shallow
} from 'enzyme'

describe('(Component) NotesList', () => {

  const wrapper = shallow(<NotesList />)
  const mainTag = wrapper.type()

  it('renders a list of notes', () => {
    //looks at type of tag
    expect(mainTag).to.equal("ul");
  });

  it('displays notes', () => {
    expect(wrapper.contains(<ul><Note>This is a note</Note></ul>)).to.equal(true)
  })



})
