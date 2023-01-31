import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [images, setImages] = useState([] as any[]);
  const API_KEY = "33167824-361d207c5e720e0f6b5e1d91d";
  useEffect(() => {
    axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&q=cats&image_type=photo&per_page=9`
    ).then((res) => setImages(res.data.hits));
  }, []);

  return (
    <div className= 'bg-slate-900 h-full border-y-2 border-y-slate-900'>
      <h1 className='titles font-bold text-center border-y-8 border-slate-900 bottom-1'>Pixabay Gallery App</h1>
      <h2 className='titles font-semibold text-center'>By: Anbar Saleem</h2> 
      <h3 className='text font-semibold text-center border-t-8 border-slate-900'>(hover over images for quick description)</h3>
      <div
        className={`${'grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4'} gap-4 m-6 p-2 bg-slate-800 rounded-md`}
      >
        {images.map((image) => (
          <div key = {image.id} className = 'flex p-2 md:p-4'>
            <div className='relative self-center mx-auto col-span-1'>
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
