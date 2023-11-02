import React from "react";

function GifList({ gifs }) {
  const gifItems = gifs.map((gif) => (
    <li key={gif.id}>
      <img src={gif.images.fixed_height.url} alt={gif.title} />
    </li>
  ));

  return <ul>{gifItems}</ul>;
}

export default GifList;
