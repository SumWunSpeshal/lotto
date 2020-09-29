import React from 'react';
import Ball from './Ball';
import Field from './Field';

const STORAGE_SERVICE = 'combination';

class App extends React.Component {
  nums = Array(49)
    .fill(0)
    .map((item, index) => index + 1);

  state = {
    combination: [],
    selectionComplete: false,
  };

  componentDidMount() {
    const prevCombination = JSON.parse(localStorage.getItem(STORAGE_SERVICE));
    this.setState({
      combination: prevCombination.length ? prevCombination : [],
      selectionComplete: prevCombination.length >= 6,
    });
  }

  async submit() {
    const body = { combination: this.state.combination };

    console.log(body); // result

    const response = await fetch('https://www.google.com', {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      body: JSON.stringify(body),
    });

    return response.json();
  }

  getItemValue(value) {
    let newArr = this.state.combination;
    this.state.combination.indexOf(value) !== -1 ? newArr.splice(newArr.indexOf(value), 1) : newArr.push(value);
    this.setState({ combination: newArr, selectionComplete: newArr.length >= 6 });
    localStorage.setItem(STORAGE_SERVICE, JSON.stringify(newArr));
  }

  delete() {
    this.setState({ combination: [], selectionComplete: false });
  }

  render() {
    return (
      <div className='App grid-container margin-top-3'>
        <div className='grid-x grid-margin-x'>
          <div className='cell small-9'>
            <section className='board'>
              <ul className='board__list'>
                {this.nums.map(item => (
                  <Field
                    key={item}
                    value={item}
                    isDisabled={this.state.selectionComplete}
                    isActive={this.state.combination.indexOf(item) !== -1}
                    eventHandler={val => this.getItemValue(val)}
                  />
                ))}
              </ul>
            </section>
            <div className='grid-x grid-margin-x'>
              <div className='cell small-6'>
                <button
                  type='button'
                  onClick={() => this.delete()}
                  className={`button button--delete ${this.state.combination.length ? '' : ' is-disabled'}`}
                >
                  <span>Delete all</span>
                </button>
              </div>
              <div className='cell small-6'>
                <button
                  type='button'
                  onClick={() => this.submit()}
                  className={`button step-${this.state.combination.length} ${
                    this.state.selectionComplete ? '' : ' is-disabled'
                  }`}
                >
                  <span>Submit</span>
                </button>
              </div>
            </div>
          </div>
          <div className='cell small-3'>
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
