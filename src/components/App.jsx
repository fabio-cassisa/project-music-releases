import React, { useState, useEffect } from 'react';
import { Sidebar } from './Sidebar';
import { Album } from './Album/Album';
import { Header } from './Album/Header';
import data from '../data.json';
import stretchedGoalsData from "../stretched-goal.json";
import '../styles/Album.css';

export const App = () => {
  const [filterType, setFilterType] = useState("all");
  const [headerText, setHeaderText] = useState("New Albums & Singles");

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

  useEffect(() => {
    if (filterType === "singles") {
      setHeaderText("New Singles");
    } else if (filterType === "albums") {
      setHeaderText("New Albums");
    } else {
      setHeaderText("New Albums & Singles");
    }
  }, [filterType]);

  // Define a state to control the visibility of the sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="main-wrapper">
        <div className="button-container">
          <button onClick={toggleSidebar}>
              {isSidebarOpen ? "Hide Playlists" : "Show Playlists"}
          </button>
          <button onClick={() => setFilterType("all")}>All</button>
          <button onClick={() => setFilterType("singles")}>Singles</button>
          <button onClick={() => setFilterType("albums")}>Albums</button>
        </div>
        <Header headerText={headerText} />
        <section className="album-container">
          {filteredAlbums.map((album) => (
            <Album key={album.id} albumData={album} />
          ))}
        </section>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <div className="sidebar-content">
          <h2>{stretchedGoalsData.message}</h2>
          <ul>
            {stretchedGoalsData.playlists.items.map((playlist) => (
              <li key={playlist.id}>
                <a href={playlist.external_urls.spotify}>
                  <img src={playlist.images[0].url} alt={playlist.name} />
                  <span>{playlist.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};