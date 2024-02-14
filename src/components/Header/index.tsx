import { Link } from "react-router-dom";
import "./styles.css";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <h4>GitHub API</h4>
      </Link>
    </header>
  );
}
