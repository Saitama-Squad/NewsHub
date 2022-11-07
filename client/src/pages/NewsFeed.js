import * as React from 'react';
import News from '../component/News';
import axios from "axios";

const NewsFeed = () => {
  const [articles, setArticles] = React.useState([])
  const [fetch, setFetch] = React.useState(false);

  React.useEffect(() => {
    const fn = () => {
      axios.get("http://169.51.205.76:32522/api/get-top-headlines?userName="+sessionStorage.getItem('@user')).then((data, error) => {
        console.log(data.data.articles);
        setArticles(data.data.articles);
        setFetch(true);
      })
    }
    fn();
  }, [])

  return (
    <div className='w-full flex'>
      <div className='m-auto justify-center p-20 rounded-lg'>
        {fetch ?
          <>
            {articles.map((item, index) =>
              <News new={item} key={index} />
            )
            }
          </>
          : null}
      </div>
    </div>
  );
}

export default NewsFeed;