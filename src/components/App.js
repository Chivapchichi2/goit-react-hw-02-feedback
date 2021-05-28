import React, { Component } from 'react';

class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
}

  render() {
    const { good, neutral, bad } = this.state;
    return (
    <>
      <header className="App-header">
        <h1>react hw-02 feedback</h1>
      </header>
      <main>
          <section>
            <h2>Please leave feedback</h2>
            <button type="button">Good</button>
            <button type="button">Neutral</button>
            <button type="button">Bad</button>
          </section>
          <section>
            <h2>Statistics</h2>
            <p>Good: { good }</p>
            <p>Neutral: { neutral }</p>
            <p>Bad: { bad }</p>
          </section>
      </main>
    </>
  );
  }
}

export default App;
