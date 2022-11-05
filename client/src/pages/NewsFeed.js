import * as React from 'react';
import News from '../component/News';


const NewsFeed = () => {

    const sampleNewsFeed = [
        {
            title: "Delhi Under Smog Blanket As Air Quality Remains",
            date: "September 14, 2016",
            description: "A thick layer of smog blanketed the city, primarily due to unfavourable meteorological conditions and farm fires in Punjab. Official data on Friday revealed that stubble burning in Punjab contributed 34 per cent to Delhi's PM 2.5 pollution",
            image: "https://c.ndtvimg.com/2022-11/q2f0r9jg_delhi-pollution_625x300_05_November_22.jpg",
            article: "ndtv.com/delhi-news/delhi-under-smog-blanket-as-air-quality-remains-severe-3492167"
        },
        {
            title: "Joe Biden slams Elon Musk's acquisition of Twitter",
            date: "August 20, 2022",
            description: "United States President Joe Biden has criticised Elon Musk's decision to acquire Twitter, by saying that the world's richest person bought an outfit that sends and spews lies across the world.",
            image: "https://images.hindustantimes.com/img/2022/11/05/550x309/AP11-05-2022-000005A-0_1667625328969_1667625328969_1667625351710_1667625351710.jpg",
            article: "https://www.hindustantimes.com/world-news/sends-and-spews-lies-joe-biden-slams-elon-musk-s-acquisition-of-twitter-101667621767474.html"   
        },
        {
            title: "I was hit by four bullets, says Imran Khan",
            date: "Nov 4, 2022",
            description: "Former Pakistan Prime Minister Imran Khan on November 4, 2022 said he was hit by four bullets on his right leg during the assassination attempt by two shooters a day earlier, when he was leading a political march in Punjab province.",
            image: "https://images.hindustantimes.com/img/2022/11/03/550x309/PAKISTAN-POLITICS-KHAN-1_1653179422442_1667490622423_1667490622423.jpg",
            article: "https://www.thehindu.com/news/international/i-was-hit-by-four-bullets-says-imran-khan-in-first-address-to-nation-after-assassination-bid/article66097149.ece"
        },
        {
            title: "Three killed in refrigerator explosion in Chennai outskirts",
            date: "October 14, 2021",
            description: "Three of a family at Urapakkam in Chengalpattu district reportedly died after inhaling toxic gas that reportedly emanated from the refrigerator, which exploded in their apartment on Friday, Collector Rahul Nadh said",
            image: "https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/Chennai_DridgeBlast_Death_51122_1200.jpg?itok=AGQ8dWqk",
            article: "https://www.thenewsminute.com/article/three-killed-refrigerator-explosion-chennai-outskirts-169616"
        }
    ]
  return (
    <div className='w-full flex'>
    <div className='m-auto justify-center p-20 rounded-lg'>
      {sampleNewsFeed.map((item,index)=>{
        return(
          <News new={item}/>
        )
      })}
    </div>
    </div>
  );
}

export default NewsFeed;