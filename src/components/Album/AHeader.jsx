import "../../styles/AHeader.css";

export const AlbumHeader = ({ AlbumHeaderText }) => (
  <header className="album-header-container">
    <h1 className="album-header">{AlbumHeaderText}</h1>
  </header>
);
