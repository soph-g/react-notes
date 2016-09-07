import React from 'react';

const styles = {
  height: '100%',
  background: '#333'
}

class Root extends React.Component {
  render() {
    return (
      <div style={styles}>
        <h1 className='welcome-header'>Welcome to testing React!</h1>
      </div>
    )
  }
}

export default Root;
