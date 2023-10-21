import "../../styles/AlbumDetails.css";

export function AlbumDetails({ album }) {
  return (
    <div className="album-details">
      <p>
        <strong>Release Date:</strong> {album.release_date}
      </p>
      <p>
        <strong>Total Tracks:</strong> {album.total_tracks}
      </p>
    </div>
  );
}
