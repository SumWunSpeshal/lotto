import React from 'react';
import './Field.css';

class Field extends React.Component {
  state = {
    active: false,
  };

  onClick = () => {
    this.props.eventHandler(this.props.value);
    this.setState({ active: !this.state.active });
  };

  render() {
    return (
      <li className='board__item'>
        <button
          onClick={this.onClick}
          className={
            'board__button' +
            (this.state.active ? ' is-active' : '') +
            (this.props.isDisabled && !this.state.active ? ' is-disabled' : '')
          }
        >
          {this.props.value}
        </button>
      </li>
    );
  }
}

export default Field;
