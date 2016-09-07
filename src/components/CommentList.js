import React from 'react';

const propTypes = {
  onMount: React.PropTypes.func.isRequired,
  isActive: React.PropTypes.bool
};

class CommentList extends React.Component {
  componentDidMount() {
    this.props.onMount();
  }

  render() {
    return (
      <ul>
        <li> Comment One </li>
      </ul>
    )
  }
}

CommentList.propTypes = propTypes;
export default CommentList;
