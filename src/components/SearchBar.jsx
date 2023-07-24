import React, { useState, useEffect } from "react";
import axios from "axios";
const SearchBar = ({ setInfo }) => {
  const [search, setSearch] = useState("");
  //   const [info, setInfo] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  async function getImages() {
    try {
      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: {
            query: search || "bmw",
          },
          headers: {
            authorization: `Client-ID ${import.meta.env.VITE_APP_SECRET}`,
          },
        }
      );
      //   console.log(response.data.results);
      setInfo(response.data.results);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={getImages}>search</button>
      </div>
      <h1>Image Bazzar</h1>
    </>
  );
};

export default SearchBar;
