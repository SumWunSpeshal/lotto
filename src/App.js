import React from 'react';
import Ball from './Ball';
import Field from './Field';

class App extends React.Component {
  nums = Array(49)
    .fill(0)
    .map((item, index) => index + 1);

  state = {
    combination: [],
    selectionComplete: false,
  };

  submit() {
    console.log(this.state.combination);
  }

  getItemValue(value) {
    let newArr = this.state.combination;
    this.state.combination.indexOf(value) !== -1 ? newArr.splice(newArr.indexOf(value), 1) : newArr.push(value);
    this.setState({ combination: newArr, selectionComplete: newArr.length >= 6 });
  }

  render() {
    return (
      <div className='App grid-container'>
        <div className='grid-x grid-margin-x'>
          <div className='cell small-5'>
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
            <button
              type='button'
              onClick={() => this.submit()}
              className={`button step-${this.state.combination.length} ${
                this.state.selectionComplete ? '' : ' is-disabled'
              }`}
            >
              Submit
            </button>
          </div>
          <div className='cell small-7'>
            <div className='balls'>
              {this.state.combination.map(item => (
                <Ball key={item} num={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
