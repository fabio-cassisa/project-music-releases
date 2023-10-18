import "../../styles/AlbumName.css";

export function AlbumName({ name, url }) {
  return (
    <div className="album-name">
      <h2>
        <a href={url}>{name}</a>
      </h2>
    </div>
  );
}
