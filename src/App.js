import { useEffect, useState } from "react";
import "./App.css";
import Photo from "./components/Photo";

const App = () => {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((response) => response.json())
      .then((data) => setPhotoData(data));
  }, []);
  return (
    <div className="App">
      {photoData ? (
        photoData.map((photo, index) => (
          <Photo
            key={photo.id}
            title={photo.title}
            url={photo.url}
            thumbnailUrl={photo.thumbnailUrl}
          />
        ))
      ) : (
        <div>
          <p> No data found </p>
        </div>
      )}
    </div>
  );
};

export default App;
