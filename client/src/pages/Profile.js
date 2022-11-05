import React from "react";
import Link from '@mui/material/Link';
import LaunchIcon from '@mui/icons-material/Launch';
import ClearIcon from '@mui/icons-material/Clear';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const article_titles = [
  {
    title: "Delhi Under Smog Blanket As Air Quality Remains. "
  },
  {
    title: "Joe Biden slams Elon Musk's acquisition of Twitter"
  },
  {
    title: "I was hit by four bullets, says Imran Khan"
  },
  {
    title: "Three killed in refrigerator explosion in Chennai outskirts"
  },
  {
    title: "Delhi Under Smog Blanket As Air Quality Remains"
  },
  {
    title: "Delhi Under Smog Blanket As Air Quality Remains"
  },
  {
    title: "Joe Biden slams Elon Musk's acquisition of Twitter"
  },
  {
    title: "I was hit by four bullets, says Imran Khan"
  },
  {
    title: "Three killed in refrigerator explosion in Chennai outskirts"
  },
  {
    title: "Delhi Under Smog Blanket As Air Quality Remains"
  }
]

const available_topics = [
  "technology", "government", "politics", "education", "health", "environment", "economy and business", "fashion", "entertainment", "sport"
]

const picked_topics = [
  {
    topic: "technology"
  },
  {
    topic: "government"
  },
  {
    topic: "politics"
  },
  {
    topic: "technology"
  },
  {
    topic: "government"
  },
  {
    topic: "politics"
  }
]


const Profile = () => {
  return (
    <>
      <div className="h-screen">

        <div className="flex mt-10 h-1/3 justify-center">

          <div className="w-1/4 h-full border-2 border-slate-600">
            <div className="mx-auto h-4/6">
              Profile Picture
              <img src="https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg" alt="Logo" />
            </div>
            <div className="mx-auto mt-5 w-fit h-1/6 text-slate-100">
              <LinkedInIcon />
              <FacebookIcon />
              <InstagramIcon />
            </div>
          </div>

          <div className="w-2/4 bg-red-700 mx-9 h-5/6">

            <div className="flex h-full">

              <div className="w-1/2 border-white border">
                <div className="mx-auto text-slate-100 w-fit mt-10 align-text-bottom text-center">Detail 1: Value 1</div>
                <div className="mx-auto text-slate-100 w-fit mt-2 align-text-bottom text-center">Detail 2: Value 2</div>
                <div className="mx-auto text-slate-100 w-fit mt-2 align-text-bottom text-center">Detail 3: Value 3</div>
                <div className="mx-auto text-slate-100 w-fit mt-2 align-text-bottom text-center">Detail 4: Value 4</div>
              </div>

              <div className="w-1/2 h-full border-white border">
                <div className="mx-auto text-slate-100 w-fit mt-10 align-text-bottom text-center">Detail 5: Value 5</div>
                <div className="mx-auto text-slate-100 w-fit mt-2 align-text-bottom text-center">Detail 6: Value 6</div>
                <div className="mx-auto text-slate-100 w-fit mt-2 align-text-bottom text-center">Detail 7: Value 7</div>
                <div className="mx-auto text-slate-100 w-fit mt-2 align-text-bottom text-center">Detail 8: Value 8</div>
              </div>

            </div>

          </div>

        </div>

        <div className="flex mt-10 h-3/5 justify-center">

          <div className="w-1/4 h-full ml-10 border-2 border-slate-600">
            <div className="mx-auto h-4/6 text-red-500 w-fit mt-10 align-text-bottom text-center"> Statistics </div>
          </div>

          <div className="w-2/4 h-full ml-10">

            <div className="mx-auto h-2/6 text-slate-100 w-full align-text-bottom border border-emerald-600 overflow-scroll">
              {/* <input type="text" placeholder="Search.." className="m-1 p-1" /> */}

              <div className="bg-blue-800 w-fit p-2 rounded-md m-2 text-center" onClick={() => { console.log("adding more tags") }}>Add More Categories</div>

              <div className="grid grid-cols-3">
                {picked_topics.map((topic, index) => (
                  <div className="text-left ml-10 w-fit p-1 bg-purple-500 mt-2 ">
                    {index + 1}. {topic.topic}
                    <ClearIcon color="error" onClick={() => { console.log("closed") }} />
                  </div>
                ))}

              </div>
            </div>
            <div className="mx-auto w-full h-3/6 text-slate-100 mt-10 border border-emerald-600 overflow-scroll"> Saved Stories

              {article_titles.map((article, index) => (
                <div className="text-left ml-10 w-4/5 p-2 bg-purple-900 mt-2 rounded-xl">
                  {index + 1}. {article.title}
                  <Link href="www.google.com" color="primary">
                    <LaunchIcon />
                  </Link>
                </div>
              ))}

            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Profile;