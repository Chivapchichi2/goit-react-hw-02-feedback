import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  addFeedback = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1
    }))
  };
  
  // Упростил 
  // countTotalFeedback = () => Object.values(this.state).reduce((feedback, total) => feedback + total, 0);
  // countPositiveFeedbackPercentage = () => Math.round(this.state.good / this.countTotalFeedback() * 100);

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    const positiveFeedbackPercentage = Math.round(good / totalFeedback * 100);
    return (
    <>
      <header className="App-header">
        <h1>react hw-02 feedback</h1>
      </header>
      <main>
          <section>
            <h2>Please leave feedback</h2>
            <button type="button" onClick={()=>this.addFeedback("good")}>Good</button>
            <button type="button" onClick={()=>this.addFeedback("neutral")}>Neutral</button>
            <button type="button" onClick={()=>this.addFeedback("bad")}>Bad</button>
          </section>
          <section>
            <h2>Statistics</h2>
            <p>Good: { good }</p>
            <p>Neutral: { neutral }</p>
            <p>Bad: { bad }</p>
            <p>Total: { totalFeedback }</p>
            <p>Positive feedback: { positiveFeedbackPercentage }%</p>
          </section>
      </main>
    </>
  );
  }
}

export default App;
