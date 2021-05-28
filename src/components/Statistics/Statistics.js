import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({good, neutral, bad, totalFeedback, positiveFeedbackPercentage}) => {
  return (
    <>
      <p className={styles.Statistics}>Good: { good }</p>
      <p className={styles.Statistics}>Neutral: { neutral }</p>
      <p className={styles.Statistics}>Bad: { bad }</p>
      <p className={styles.Statistics}>Total: { totalFeedback }</p>
      <p className={styles.Statistics}>Positive feedback: { positiveFeedbackPercentage }%</p>
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