import "../../styles/ArtistName.css";

export function ArtistName({ artists }) {
  const artistNames = artists.map((artist) => artist.name);
  //const displayNames = artistNames.join(", ").replace(/, ([^,]*)$/, " & $1");

  return (
    <div className="artist-names">
      {artists.map((artist, index) => (
        <h3 key={artist.id}>
          <a href={artist.external_urls.spotify}>{artist.name}</a>
          {index !== artists.length - 1 && ", "}
        </h3>
      ))}
    </div>
  );
}
