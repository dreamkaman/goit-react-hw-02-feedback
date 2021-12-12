import styles from './Statistics.module.css';

const Statistics = props => {
  const { good, neutral, bad, percentage, total } = props;
  return (
    <>
      <p>
        <span className={styles.spanText}>Good: </span>
        {good}
      </p>
      <p>
        <span className={styles.spanText}>Neutral: </span>
        {neutral}
      </p>
      <p>
        <span className={styles.spanText}>Bad: </span>
        {bad}
      </p>
      <p>
        <span className={styles.spanText}>Total: </span>
        {total}
      </p>
      <p>
        <span className={styles.spanText}>Positive feedback: </span>
        {percentage}
      </p>
    </>
  );
};

export default Statistics;
