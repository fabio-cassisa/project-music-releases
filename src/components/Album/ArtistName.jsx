import "../../styles/ArtistName.css";

export function ArtistName({ artists }) {
  return (
    <div className="artist-names">
      {artists.map((artist, index) => (
        <span className="separator" key={artist.id}>
          <a href={artist.external_urls.spotify}>{artist.name}</a>
          {index === artists.length - 2
            ? " & "
            : index !== artists.length - 1
            ? ", "
            : ""}
        </span>
      ))}
    </div>
  );
}
