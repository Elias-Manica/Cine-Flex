import "./style.css";

export default function MovieDesign({ id, posterURL, tittle }) {
  return (
    <div className="movie">
      <img key={id} src={posterURL} alt={tittle}></img>
    </div>
  );
}
