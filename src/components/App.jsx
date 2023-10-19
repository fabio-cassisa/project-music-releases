import data from "../data.json";
import { Album } from "./Album/Album";
import { Header } from "./Album/Header";
import "../styles/Album.css";

export const App = () => {
  return (
    <>
      <Header />
        <section className="album-container">
        {data.albums.items.map((album) => (
          <Album key={album.id} albumData={album} />
        ))}
        </section>
    </>
  );
};
