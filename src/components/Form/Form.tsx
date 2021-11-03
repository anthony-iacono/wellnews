import React from 'react';
import { useHistory } from 'react-router-dom';
import './Form.css';

interface FormProps {
  updateUserSentiment: (userSentiment: number) => void;
}

const Form = ({ updateUserSentiment }: FormProps): JSX.Element => {
  const history = useHistory();

  const submitUserSentiment = (userSentiment: number) => {
      updateUserSentiment(userSentiment);
      history.push("/feed");
  }

  const showSynopsis = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const formSynopsis = document.getElementById('synopsisInfo') as HTMLElement;
    formSynopsis.classList.toggle('hidden');
  }

  return (
    <section className="questionnaire">
      <h2>how are you feeling today?</h2>
      <div className="sentiment-selection">
        <div className="sentiments-container">
          <button className="happy-btn" name='1' aria-label="happy" title="happy" onClick={() => submitUserSentiment(1)}></button>
          <button className="neutral-btn" name='0' aria-label="neutral" title="neutral" onClick={() => submitUserSentiment(0)}></button>
          <button className="sad-btn" name='-1' aria-label="sad" title="sad" onClick={() => submitUserSentiment(-1)}></button>
        </div>
      </div>
      <button className="view-synopsis-button" name="viewSynopsisButton" onClick={showSynopsis}>Why we ask? ▽</button>
      <article className="wellnews-synopsis" id="synopsisInfo">
        <p>WellNews uses your mood to curate a list of articles with your mental health in mind.</p>
        <p>A negative mood will prioritize positive articles. <br/>A positive mood will result in a mix of positive, neutral, and negative news.</p>
        <p>If you are unsure, select a neutral mood for a mix of articles that lean towards the positive.</p>
        <p>You can change your mood preference at any time.</p>
      </article>
    </section>
  );
};

export default Form;
