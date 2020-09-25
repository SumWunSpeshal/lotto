import React from 'react';
import Field from './Field';
import './App.css';

class App extends React.Component {
  nums = Array.from(Array(49).keys()).map(item => item + 1);

  state = {
    combination: [],
    bla: 'asdasdadssad',
  };

  getItemValue(value) {
    console.log(this);
  }

  render() {
    return (
      <div className='App'>
        {this.nums.map(item => (
          <Field key={item} value={item} eventHandler={this.getItemValue} />
        ))}
      </div>
    );
  }
}

export default App;
