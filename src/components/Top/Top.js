import "./style.css";
import { Link } from "react-router-dom";

export default function Topo() {
  return (
    <>
      <Link to={"/"}>
        <div className="topPage">
          <h1>CINEFLEX</h1>
        </div>
      </Link>
    </>
  );
}
