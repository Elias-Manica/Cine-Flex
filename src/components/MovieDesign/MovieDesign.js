import "./style.css";

export default function MovieDesign({ unique, id, posterURL, title }) {
  return (
    <div className="movie" onClick={() => console.log(unique, id)}>
      <img key={unique} src={posterURL} alt={title}></img>
    </div>
  );
}
