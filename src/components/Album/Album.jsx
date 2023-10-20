import { AlbumName } from "./AlbumName";
import { ArtistName } from "./ArtistName";
import { CoverImage } from "./CoverImage";
import PlayIcon from "../../assets/icons/play.svg";
import FavoriteIcon from "../../assets/icons/heart.svg";
import MoreIcon from "../../assets/icons/dots.svg";
import InfoIcon from "../../assets/icons/info-icon.svg";
import "../../styles/Album.css";

export const Album = ({ albumData }) => {
  return (
    <div className="album">
      <div className="cover-wrapper">
        <button className="info-button">
          <img src={FavoriteIcon} alt="Favorite" />
        </button>
        <div className="album-overlay">
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
    </div>
  );
};
