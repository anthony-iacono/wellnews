import Card from '../Card/Card';
import { CleanedArticle } from '../../Models';
import '../Feed/Feed.css'

interface HistoryProps {
  history: CleanedArticle[];
  updateUserSentiment: (userSentiment: number) => void
  storeArticle: (id: string) => void
  toggleSaved: (id: string) => void
  savedArticles: CleanedArticle[]
}

const History = ({ history, storeArticle, updateUserSentiment, toggleSaved, savedArticles }: HistoryProps): JSX.Element => {

  let articleCards: JSX.Element[] = [];

  if (history) {
    articleCards = history.map((article: CleanedArticle) => {
      let isSaved;
      if (savedArticles.find(savedArticle => savedArticle.id === article.id)) {
        isSaved = true;
      } else {
        isSaved = false;
      }

      return (
        <Card
          title={ article.title }
          image={ article.multimedia.url }
          key={ article.title }
          sentiment={ article.sentiment }
          shortUrl={ article.shortUrl }
          id={ article.id }
          topic= { article.topic }
          abstract= { article.abstract }
          storeArticle={ storeArticle }
          updateUserSentiment={ updateUserSentiment }
          toggleSaved={ toggleSaved }
          isSaved={ isSaved }
        />
      )
    })
  }

  return (
    <div className="articles-container">
        <section className="articles-display">
          { articleCards.length ? articleCards
            : <h3 className="no-match-message">Articles you've read will appear here</h3> }
        </section>
    </div>
  )
}

export default History;
