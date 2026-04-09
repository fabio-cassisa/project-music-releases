import { useState, useEffect, useRef } from "react";
import { Header } from "./Header";
import { Album } from "./Album/Album";
import { AlbumHeader } from "./Album/AHeader";
import data from "../data.json";
import stretchedGoalsData from "../stretched-goal.json";
import "../styles/Album.css";
import "../styles/Sidebar.css";
import { Footer } from "./Footer";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "singles", label: "Singles" },
  { key: "albums", label: "Albums" },
];

const HEADER_TEXT = {
  all: "New Albums & Singles",
  singles: "New Singles",
  albums: "New Albums",
};

export const App = () => {
  const [filterType, setFilterType] = useState("all");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const buttonRef = useRef(null);

  const typeMap = { singles: "single", albums: "album" };
  const filteredAlbums =
    filterType === "all"
      ? data.albums.items
      : data.albums.items.filter((a) => a.album_type === typeMap[filterType]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target) &&
        isSidebarOpen
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSidebarOpen]);

  return (
    <>
      <div className="main-wrapper">
        <Header />

        <div className="button-playlist-div">
          <button
            className="button-playlist"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            ref={buttonRef}
          >
            {isSidebarOpen ? "hide playlists" : "show playlists"}
          </button>
        </div>

        <div className="button-container">
          {FILTERS.map(({ key, label }) => (
            <button
              key={key}
              className={`button-top ${filterType === key ? "active" : ""}`}
              onClick={() => setFilterType(key)}
            >
              {label}
            </button>
          ))}
        </div>

        <AlbumHeader AlbumHeaderText={HEADER_TEXT[filterType]} />

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
                <a
                  href={playlist.external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
