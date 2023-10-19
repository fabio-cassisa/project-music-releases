import data from "../data.json";
import { Album } from "./Album/Album";
import { Header } from "./Album/Header";
import "../styles/Album.css";
import React, { useState } from "react";

export const App = () => {
  const [filterType, setFilterType] = useState("all");

  // Implement the filtering logic
  let filteredAlbums = data.albums.items;
  if (filterType === "singles") {
    filteredAlbums = data.albums.items.filter(
      (album) => album.album_type === "single"
    );
  } else if (filterType === "albums") {
    filteredAlbums = data.albums.items.filter(
      (album) => album.album_type === "album"
    );
  }

  return (
    <>
      <div className="main-wrapper">
        <Header />
      <div className="button-container">
        <button onClick={() => setFilterType("all")}>All</button>
        <button onClick={() => setFilterType("singles")}>Singles</button>
        <button onClick={() => setFilterType("albums")}>Albums</button>
      </div>
      <section className="album-container">
        {filteredAlbums.map((album) => (
          <Album key={album.id} albumData={album} />
        ))}
      </section>
      </div>
    </>
  );
};
