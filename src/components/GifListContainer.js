import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);

  const fetchGifs = (searchTerm) => {
    const apiKey = "vREKFj9ZSCehmcknB8gg0yYBJeGfZwVY";
    const rating = "g";


    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&rating=${rating}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const fetchedGifs = data.data.slice(0, 3); 
        setGifs(fetchedGifs);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchGifs("dolphin"); 
  }, []);

  return (
    <div>
      <GifSearch onSubmit={fetchGifs} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;
