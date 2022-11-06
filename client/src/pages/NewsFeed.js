import * as React from 'react';
import News from '../component/News';


const NewsFeed = () => {
  const [articles, setArticles] = React.useState([])
  async function get_news(user) {
    const res = await fetch("http://localhost:5000/get-top-headlines?userName=lokesh")
    const data = await res.json()
    console.log(data.articles)
    setArticles(data.articles)
  }
  React.useEffect(async ()=>{await get_news('lokesh')},[])
  function render(){
    articles.map((item,index)=>{
      return(
      <News new={item} />
    )
  })
  }
  return (
    <div className='w-full flex'>
      <div className='m-auto justify-center p-20 rounded-lg'>
        { 
        render()
        }
      </div>
    </div>
  );
}

export default NewsFeed;