import React, { useState, useEffect } from 'react';
import { FeedbackOptions } from '../components/FeedbackOptions/feedbackOptions';
import { Statistics } from '../components/Statistics/statistics';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handelIncrement = ({ option }) => {
    option === 'good' && setGood(good + 1);
    option === 'neutral' && setNeutral(neutral + 1);
    option === 'bad' && setBad(bad + 1);
  };

  const countTotalFeedback = () => {
    let total = 0;
    return (total += good + neutral + bad);
  };

  useEffect(() => {}, [good, neutral, bad]);

  const countPositiveFeedbackPercentage = () => {
    return ((good / countTotalFeedback()) * 100).toFixed(0);
  };

  return (
    <div style={divStyles}>
      <div style={feedbackStyles}>
        <h2 style={{ fontSize: '50' }}>Please leave feedback</h2>
        <section title="FeedbackOptions">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={handelIncrement}
          />
        </section>
        <section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </section>
      </div>
    </div>
  );
}

const divStyles = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  fontSize: 40,
  color: '#010101',
  flexDirection: 'column',
};
const feedbackStyles = {
  fontFamily: 'Cantarell',
  textAlign: 'start',
};
