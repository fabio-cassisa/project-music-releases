import React, { useState } from "react";
import { AlbumName } from "./AlbumName";
import { ArtistName } from "./ArtistName";
import { CoverImage } from "./CoverImage";
import { AlbumDetails } from "./AlbumDetails"; // Make sure to import the AlbumDetails component
import PlayIcon from "../../assets/icons/play.svg";
import FavoriteIcon from "../../assets/icons/heart.svg";
import MoreIcon from "../../assets/icons/dots.svg";
import InfoIcon from "../../assets/icons/info-icon.svg";
import "../../styles/Album.css";

export const Album = ({ albumData }) => {
  const [showDetails, setShowDetails] = useState(false); // State to control the visibility of AlbumDetails

  return (
    <div className="album">
      <div className="cover-wrapper">
        <div className="album-overlay">
          <div className="info">
            <button
              className="info-button"
              onClick={() => setShowDetails(!showDetails)}
            >
              <img src={InfoIcon} alt="MoreInfo" />
            </button>
          </div>
          <button className="favorite-button">
            <img src={FavoriteIcon} alt="Favorite" />
          </button>
          <button className="play-button">
            <img src={PlayIcon} alt="Play" />
          </button>
          <button className="more-button">
            <img src={MoreIcon} alt="More" />
          </button>
        </div>
        <CoverImage imageUrl={albumData.images[0].url} />
      </div>
      <AlbumName name={albumData.name} url={albumData.external_urls.spotify} />
      <ArtistName artists={albumData.artists} />
      {showDetails && <AlbumDetails album={albumData} />}{" "}
      {/* Conditionally render AlbumDetails based on showDetails state */}
    </div>
  );
};
