import './NotFound.css'
import { Link } from 'react-router-dom';



export function NotFound() {

  return (
    <section className='not-found-page'>
      <div className="not-found-page__container">
        <h1 className="not-found-page__h1">
          404
        </h1>

        <h2 className="not-found-page__h2">
          Page Not Found
        </h2>

        <p className="not-found-page__p">
          The page you're looking for doesn't exist or may have been removed.
        </p>

        <Link
          to={'/'}
          className="not-found-page__btn"
        >
          Return to Home
        </Link>
      </div>
    </section>
  );
}