import "./style.css";
import { Link } from "react-router-dom";

export default function MovieDesign({ unique, id, posterURL, title }) {
  return (
    <Link to={`/sessoes/${id}`}>
      <div className="movie">
        <img key={unique} src={posterURL} alt={title}></img>
      </div>
    </Link>
  );
}
