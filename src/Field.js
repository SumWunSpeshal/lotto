import React from 'react';

class Field extends React.Component {
  render() {
    return (
      <div className='field' onClick={() => this.props.eventHandler(this.props.value)}>
        {this.props.value}
      </div>
    );
  }
}

export default Field;
