import "./Header.css";
import Button from "./Button";

const Header = ({ title, color, show, toggle }) => {
  return (
    <header className="header">
      <div className="container">
        <h1 style={{ color: color }}>{title} Task Tracker</h1>
        <Button
          onClick={() => show(toggle)}
          text={toggle ? "Hide" : "Show"}
          color={toggle ? "red" : "green"}
        />
      </div>
    </header>
  );
};

export default Header;
