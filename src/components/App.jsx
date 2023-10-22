import React, { useState, useEffect, useRef } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Album } from "./Album/Album";
import { AlbumHeader } from "./Album/AHeader";
import data from "../data.json";
import stretchedGoalsData from "../stretched-goal.json";
import "../styles/Album.css";
import { Footer } from "./Footer";

export const App = () => {
  const [filterType, setFilterType] = useState("all");
  const [AlbumHeaderText, setHeaderText] = useState("New Albums & Singles");

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

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target) &&
        isSidebarOpen
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="main-wrapper">
        <Header />
        <div className="button-playlist-div">
          <button
            className="button-playlist"
            onClick={toggleSidebar}
            ref={buttonRef}
          >
            {isSidebarOpen ? "Hide Playlists" : "Show Playlists"}
          </button>
        </div>
        <div className="button-container">
          <button className="button-top" onClick={() => setFilterType("all")}>
            All
          </button>
          <button
            className="button-top"
            onClick={() => setFilterType("singles")}
          >
            Singles
          </button>
          <button
            className="button-top"
            onClick={() => setFilterType("albums")}
          >
            Albums
          </button>
        </div>
        <AlbumHeader AlbumHeaderText={AlbumHeaderText} />
        <section className="album-container">
          {filteredAlbums.map((album) => (
            <Album key={album.id} albumData={album} />
          ))}
        </section>
        <Footer />
      </div>

      <div
        className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}
        ref={sidebarRef}
      >
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
