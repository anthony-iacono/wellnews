import React from 'react';
import './Form.css';


interface FormProps {
  changeUserSentiment: (newSentiment: number | string) => void
}

const Form = ({ changeUserSentiment } : FormProps) : JSX.Element => {
  const assignSentiment = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      const button: HTMLButtonElement = event.currentTarget;
      changeUserSentiment(Number(button.name));
  }

  return(
    <section className="questionnaire">
        <h2>how are you feeling today?</h2>
        <div className="sentiment-selection">
          <div className="sentiments-container">
            <button className="happy-btn" name="1" onClick={assignSentiment}></button>
            <button className="neutral-btn" name="0" onClick={assignSentiment}></button>
            <button className="sad-btn" name="-1" onClick={assignSentiment}></button>
          </div>
        </div>
      <article className="wellnews-synopsis">
        <p>WellNews uses your mood to curate a list of articles with your mental health in mind.</p>
        <p>A negative mood will prioritize positive articles. <br/>A positive mood will result in a mix of positive, neutral, and negative news.</p>
        <p>If you are unsure, select a neutral mood for a mix of articles that lean towards the positive.</p>
        <p>You can change your mood preference at any time.</p>
      </article>
    </section>
  )
};

export default Form;
