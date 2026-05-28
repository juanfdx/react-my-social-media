import './ErrorPage.css'
import { Link, useRouteError } from 'react-router-dom';



export function ErrorPage() {

  const error = useRouteError() as { 
    status: number, 
    statusText: string, 
    error: { message: string }
  } 
  console.error(`Error: ${error.status} ${error.statusText}`);

  
  return (
   <section className='error-page'>
      <div className="error-page__container">
        <h1 className="error-page__h1">
          {error.status || 500}
        </h1>
  
        <h2 className="error-page__h2">
          {error.statusText || "Something went wrong."}
        </h2>
  
        <p className="error-page__p">
          {"We apologize for the inconvenience. Please try again later."}
        </p>
  
        <Link
          to="/"
          className="error-page__btn"
        >
          Return to Home
        </Link>
      </div>
   </section>
  );
}