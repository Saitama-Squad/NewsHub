import React, { useState, useEffect } from 'react';
import News from '../component/News';
import axios from "axios";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

const NewsFeed = () => {
  const [articles, setArticles] = useState([])
  const [fetch, setFetch] = useState(false);
  const [likedArticles, setLikedArticles] = useState([]);
  const [bookedArticles, setBookedArticles] = useState([]);
  useEffect(() => {
    const fn = () => {
      axios.get("http://169.51.205.76:32522/get-top-headlines?userName=" + sessionStorage.getItem('@user')).then((data, error) => {
        console.log(data.data.articles);
        axios.get("http://169.51.205.76:32522/profile?userName=" + sessionStorage.getItem('@user')).then((profileData, err) => {
          console.log(profileData);
          const likedLinks = profileData.data?.likes.reduce((prev, cur) => {
            return prev.concat(cur.NEWS_ARTICLE_LINK);
          }, [])
          const bookmarkedLinks = profileData.data?.bookmarks.reduce((prev, cur) => {
            return prev.concat(cur.NEWS_ARTICLE_LINK);
          }, [])
          console.log(likedLinks);
          console.log(bookmarkedLinks);
          setLikedArticles(likedLinks);
          setBookedArticles(bookmarkedLinks);
          setArticles(data.data.articles);
          setFetch(true);
        })
      })
    }
    fn();
  }, [])

  return (
    <div className='w-full flex'>
      <div className='m-auto justify-center p-20 rounded-lg'>
      <Link to="/profile"><CgProfile className='text-white text-5xl float-right -mr-40 -mt-16' /></Link>
        {fetch ?
          <>
            {articles.map((item, index) =>
              <News new={{
                ...item,
                liked: likedArticles?.includes(item.url),
                bookmark: bookedArticles?.includes(item.url)
              }} key={index} />
            )
            }
          </>
          : null}
      </div>
    </div>
  );
}

export default NewsFeed;