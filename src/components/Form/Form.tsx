import React from 'react';
import { useHistory } from 'react-router-dom';
import './Form.css';


interface FormProps {
  changeUserSentiment: (newSentiment: number | null) => void
}

const Form = ({ changeUserSentiment } : FormProps) : JSX.Element => {
  const assignSentiment = (sentiment:number) => {
      changeUserSentiment(sentiment);
      history.push("/feed/")
  }
  const history= useHistory();
  return(
    <section className="questionnaire">
      <h2>how are you feeling today?</h2>
      <form className="sentiment-selection">
        <div className="sentiments-container">
          <button className="happy-btn" aria-label="happy" title="happy" onClick={() => assignSentiment(1)}></button>
        <button className="neutral-btn" aria-label="neutral" title="neutral" onClick={() => assignSentiment(0)}></button>
        <button className="sad-btn" aria-label="sad" title="sad" onClick={() => assignSentiment(-1)}></button>
        </div>
        </form>
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
