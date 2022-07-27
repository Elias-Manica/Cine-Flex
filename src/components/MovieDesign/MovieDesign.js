import "./style.css";

export default function MovieDesign({ id, posterURL, title }) {
  return (
    <div className="movie">
      <img key={id} src={posterURL} alt={title}></img>
    </div>
  );
}
