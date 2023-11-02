import React, { useState } from "react";

function GifSearch({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
        <h4>Enter a search item:</h4>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search for GIFs"
      />
      <button type="submit" class="btn btn-success">Find Gifs</button>
      <br></br>
    </form>
  );
}

export default GifSearch;
