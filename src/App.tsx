import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css'
import alts from './alt-for-images.json';

import Card from './components/Card';

//Image imports
//Icons by adriansyah from flaticon
import darkmode from './assets/darkmode.png';
import lightmode from './assets/lightmode.png';

//Defines the type for the alt object from alt-for-images.json
interface altsType {
  [key: string]: string;
}

function App() {
  //State variable to contain the images from the pixabay API
  const [images, setImages] = useState([] as any[]);

  const API_KEY = "33167824-361d207c5e720e0f6b5e1d91d";
  
  //Effect hook to query Pixabay API for 9 Cat image hits and add to images
  useEffect(() => {
    axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&q=cats&image_type=photo&per_page=9&orientation=vertical`
      ).then((res) => setImages(res.data.hits));
    }, []);
  
  //State variable to set theme of app
  const [theme, setTheme] = useState(true);

  //Toggle function for app theme
  function toggleTheme() {
    setTheme(prevTheme => !prevTheme)
  }

  return (
    // Body
    <div className={`${theme ? 'dark' : 'light'} h-full border-y-2 border-y-slate-90`}>

      <div className={`grid grid-cols-3 ${theme ? 'dark' : 'light'}`}>
        <div></div>
        <h1 tabIndex = {0} className={`${theme ? 'dark' : 'light'} titles text-xl font-bold text-center border-y-8 bottom-1`}>Pixabay Gallery App</h1>
        <img onClick={toggleTheme}
             className='h-10 w-full my-2 object-scale-down'
             src={theme ? darkmode : lightmode}
        />
      </div>
      
      {/*Subtitle, and basic instruction description */}
      <h2 tabIndex = {0} className='titles text-lg font-semibold text-center'>By: Anbar Saleem</h2> 
      <h3 tabIndex = {0} className={`text font-semibold text-center border-t-8 ${theme ? 'dark' : 'light'}`}>(click i for more info on each image)</h3>

      {/* Reactive gallery grid for images */}
      <div
        className={`${theme ? 'dark-gallery' : 'light-gallery'} relative flex flex-wrap items-center justify-center h-auto gap-2 p-2 m-6 rounded-md`}
      >
        {/* Sequentially creating the image cards */}
        {images.map((image) => {
          //Grabs alt value from json file using image id as key
          const imageID = image.id + '';
          const foo:altsType = alts;
          const alt = foo[imageID as keyof altsType];

          /* Image displaying with associated info from api on an organized Card object */
          return (
            <div key = {image.id} className = 'flex-wrap p-2 md:p-4'>
                <div className='justify-items-center object-contain'>
                  <Card
                    title={image.tags.split(',')[0]}
                    likes={image.likes}
                    comments={image.comments}
                    author={image.user}
                    image={image.webformatURL}
                    alt={alt}
                    pageURL={image.pageURL}
                  />
                </div>
            </div>
          )})
        }
      </div>
    </div>
  );
}

export default App;
