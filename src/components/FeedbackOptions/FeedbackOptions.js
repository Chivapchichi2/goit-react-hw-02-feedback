import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <>
    {options.map(option => (
      <button
        key = {option}
        type="button"
        className={styles.button}
        onClick={() => onLeaveFeedback(option)}>
        {option.charAt(0).toUpperCase() + option.slice(1)}
      </button>
    ))}
  </>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default FeedbackOptions;