import React, { Component } from 'react';

import Container from './Container';
import FeedbackOptions from './FeedbackOptions';
import Header from './Header';
import Notification from './Notification';
import Section from './Section';
import Statistics from './Statistics';

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
    const options = Object.keys(this.state);
    return (
        <Container>
          <Header />
          <Section title="Please leave feedback">          
            <FeedbackOptions
              options={options}
              onLeaveFeedback={this.addFeedback}
            />
          </Section>
          <Section title="Statistics">           
            {totalFeedback > 0 ?
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                totalFeedback={totalFeedback}
                positiveFeedbackPercentage={positiveFeedbackPercentage}
              /> :
              <Notification message="No feedback given"/>
            }
          </Section>         
        </Container>
    );
  }
}

export default App;
