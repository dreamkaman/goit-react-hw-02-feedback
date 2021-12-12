import styles from './FeedbackOptions.module.css';

const FeedbackOptions = props => {
  const { options, onLeaveFeedback } = props;

  return options.map(option => {
    return (
      <button
        id={option}
        className={styles.btn}
        type="button"
        key={option}
        onClick={onLeaveFeedback}
      >
        {option}
      </button>
    );
  });
};

export default FeedbackOptions;
