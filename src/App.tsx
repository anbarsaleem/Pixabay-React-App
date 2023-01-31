import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  //State variable to contain the images from the pixabay API
  const [images, setImages] = useState([] as any[]);

  const API_KEY = "33167824-361d207c5e720e0f6b5e1d91d";

  //Effect hook to query Pixabay API for 9 Cat image hits and add to images
  useEffect(() => {
    axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&q=cats&image_type=photo&per_page=9`
    ).then((res) => setImages(res.data.hits));
  }, []);

  return (
    // Body
    <div className= 'bg-slate-900 h-full border-y-2 border-y-slate-900'>

      {/* Title, subtitle, and basic instruction description */}
      <h1 className='titles font-bold text-center border-y-8 border-slate-900 bottom-1'>Pixabay Gallery App</h1>
      <h2 className='titles font-semibold text-center'>By: Anbar Saleem</h2> 
      <h3 className='text font-semibold text-center border-t-8 border-slate-900'>(hover over images for quick description)</h3>

      {/* Reactive gallery grid for images */}
      <div
        className={`${'grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4'} gap-4 m-6 p-2 bg-slate-800 rounded-md`}
      >
        {/* Sequentially displaying the images */}
        {images.map((image) => (

          /* Image displaying with tag appearing above only on hover of image */
          <div key = {image.id} className = 'flex p-2 md:p-4'>
            <div className='relative self-center mx-auto col-span-1'>

              {/* First tag associated with image from API becomes text to appear on hover */}
              <p className = "absolute flex justify-center items-center opacity-0 hover:opacity-100 peer inset-0 text-center font-extrabold text-4xl sm:text-base md:text-lg text-white">
                {image.tags.split(',')[0]}
              </p>
              <img
                src = {image.webformatURL}
                alt = {image.tags}
                className = "h-32 w-full object-scale-down peer-hover:opacity-20 rounded-lg inset-0"
              />  
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
