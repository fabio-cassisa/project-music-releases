import data from "../data.json";
import { Album } from "./Album/Album";

export const App = () => {
  return (
    <div className="app">
      {data.albums.items.map((album) => (
        <Album key={album.id} albumData={album} />
      ))}
    </div>
  );
};
