import React from 'react'
import { useEffect, useState } from 'react'
import './App.css'
import Decription from '../Description/Description'
import Options from '../Options/Options'
import Feedback from '../Feedback/Feedback'
import Notification from '../Notification/Notification'

const App = () => {
  
  const [counter, setCounter] = useState({good: 0, neutral: 0, bad: 0});

  const totalFeedback = (counter.good + counter.neutral + counter.bad);
  const positiveFeedback = Math.round((counter.good / totalFeedback) * 100);
  
  const updateFeedback = (feedbackType) => {
    if (feedbackType == 'reset') {
      setCounter({ good: 0, neutral: 0, bad: 0 });
      
    } else {
      setCounter({ ...counter, [feedbackType]: counter[feedbackType] + 1 });
    }
  }

  // useEffect();

    return (
    <div>
      <Decription
      />
      <Options
          good={counter.good}
          neutral={counter.neutral}
          bad={counter.bad}
          totalFeedback = {totalFeedback}
        onUpdate={updateFeedback}
        />
        {totalFeedback == 0 ? (<Notification
        />) :
          (<Feedback
            good={counter.good}
            neutral={counter.neutral}
            bad={counter.bad}
            total={totalFeedback}
            positive={positiveFeedback}
          />)}
    </div>
  );
};

export default App
