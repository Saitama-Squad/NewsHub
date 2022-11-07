import React, { useState, useEffect } from "react";
import axios from "axios";
import { Carousel } from 'react-responsive-carousel';

const Profile = () => {
  const [fetched, setFetched] = useState(false);
  const [data, setData] = useState();
  useEffect(() => {
    const fn = async () => {
      const profileData = await axios.get("http://169.51.205.76:32522/profile?userName=" + sessionStorage.getItem('@user'));
      console.log(profileData);
      setData(profileData.data);
      setFetched(true);
    }
    fn();
  }, [])
  axios.get("http://169.51.205.76:32522/profile?userName=" + localStorage.getItem('@user'))
  return (
    <>
      {fetched ?
        <div>
          <div className="pt-20">
            <div className="px-20">
              <div className="flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
                <div className="px-6">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                      <div>
                        <img width={180} height={180} alt="..." src="https://64.media.tumblr.com/bed5455fdd7789656247fb01ed60ad31/93c34c0b6d121aef-6a/s400x600/15a48a245b0ef5bb4f5215d177116cf9c4150531.png" className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px" />
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                      <div className="py-6 px-3 mt-32 sm:mt-0">
                        <button onClick={() => {
                          sessionStorage.removeItem('@user');
                          window.location.replace('/');
                        }} className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                          Logout
                        </button>
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                      <div className="flex justify-center py-4 lg:pt-4 pt-8">
                        <div className="mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">22</span><span className="text-sm text-blueGray-400">Likes</span>
                        </div>
                        <div className="mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">10</span><span className="text-sm text-blueGray-400">Bookmarks</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-12">
                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                      {data?.user.NAME}
                    </h3>
                    <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                      <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                      Date of Birth : {data?.user.DOB}
                    </div>
                    <div className="mb-2 text-blueGray-600">
                      <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i> Email : {data?.user.USERNAME}
                    </div>
                    <div className="mb-2 text-blueGray-600">
                      <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>Password : {'*'.repeat(data?.user.PASSWORD?.length)}
                    </div>
                    <div className="mb-2 text-blueGray-600">
                      <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>Topics: {data?.user.TOPICS}
                    </div>
                  </div>
                  <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                    <div className="flex flex-wrap justify-center">
                      <h1>Articles Liked</h1>
                      <Carousel>
                      
                      </Carousel>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative bg-blueGray-200 pt-8 pb-6 mt-8">
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                  <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                    <div className="text-sm text-blueGray-500 font-semibold py-1">
                      Made with <a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank">Notus JS</a> by <a href="https://www.creative-tim.com" className="text-blueGray-500 hover:text-blueGray-800" target="_blank"> Creative Tim</a>.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        : null}
    </>
  )
}

export default Profile;