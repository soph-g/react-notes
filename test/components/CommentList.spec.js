import React from 'react';

import CommentList from '../../src/components/CommentList';

import {
  mount,
  shallow
} from 'enzyme'

describe('(Component) CommentList', () => {

  it('calls componentDidMount', () => {
    const spy = sinon.spy(CommentList.prototype, "componentDidMount");

    const props = {
      onMount: () => {},
      isActive: false
    }

    mount(<CommentList {...props} />);

    expect(spy.calledOnce).to.be.true;

  });

  it('calls onMount prop once it mounts', () => {
    const props = { onMount: sinon.spy() };

    mount(<CommentList {...props} />);

    expect(props.onMount.calledOnce).to.be.true;
  });

});
