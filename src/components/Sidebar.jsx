import React, { useState } from 'react';
import '../styles/Sidebar.css';

export const Sidebar = ({ playlists }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? 'Hide Playlists' : 'Show Playlists'}
      </button>
      <div className="playlist-list">
        {playlists.map((playlist) => (
          <a
            key={playlist.id}
            href={playlist.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="playlist-item"
          >
            <img src={playlist.images[0].url} alt={playlist.name} />
            {window.innerWidth > 768 && <p>{playlist.name}</p>}
          </a>
        ))}
      </div>
    </div>
  );
};
