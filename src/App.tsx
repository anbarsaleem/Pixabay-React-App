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
    <div
      className={`${'grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4'} gap-4 m-4`}
    >
      {images.map((image) => (
        <div key = {image.id}>
          <img
            src = {image.webformatURL}
            alt = {image.tags}
            className = "object-center"
          />
          <p className = "text-center text-sm sm:text-base md:text-lg text-gray-700">
            {image.tags.split(',')[0]}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
