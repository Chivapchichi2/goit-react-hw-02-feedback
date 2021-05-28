import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({good, neutral, bad, totalFeedback, positiveFeedbackPercentage}) => {
  return (
    <>
      <p>Good: { good }</p>
      <p>Neutral: { neutral }</p>
      <p>Bad: { bad }</p>
      <p>Total: { totalFeedback }</p>
      <p>Positive feedback: { positiveFeedbackPercentage }%</p>
    </>
  )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedbackPercentage:PropTypes.number.isRequired,
}

export default Statistics;