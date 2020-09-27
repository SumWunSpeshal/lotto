import React from 'react';
import Field from './Field';

class App extends React.Component {
  nums = Array(49)
    .fill(0)
    .map((item, index) => index + 1);

  state = {
    combination: [],
    selectionComplete: false,
  };

  getItemValue(value) {
    let newArr = this.state.combination;
    this.state.combination.indexOf(value) !== -1 ? newArr.splice(newArr.indexOf(value), 1) : newArr.push(value);
    this.setState({ combination: newArr, selectionComplete: newArr.length >= 6 });
  }

  render() {
    return (
      <div className='App'>
        <section className='board'>
          <ul className='board__list'>
            {this.nums.map(item => (
              <Field
                key={item}
                value={item}
                isDisabled={this.state.selectionComplete}
                eventHandler={val => this.getItemValue(val)}
              />
            ))}
          </ul>
        </section>
        <div className='current-nums'>{this.state.combination}</div>
        <button type='button' className={`button${this.state.selectionComplete ? '' : ' is-disabled'}`}>
          Submit
        </button>
      </div>
    );
  }
}

export default App;
