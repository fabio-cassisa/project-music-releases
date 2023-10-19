import "../../styles/Header.css";

export const Header = ({ headerText }) => (
  <header className="header-container">
    <h1 className="header">{headerText}</h1>
  </header>
);
