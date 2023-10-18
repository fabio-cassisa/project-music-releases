import data from "../data.json";
import { Album } from "./Album/Album";
import "../styles/Album.css";

export const App = () => {
  return (
    <section className="album-container">
      {data.albums.items.map((album) => (
        <Album key={album.id} albumData={album} />
      ))}
    </section>
  );
};
