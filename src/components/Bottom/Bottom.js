import "./style.css";

export default function Bottom({ posterURL, title }) {
  return (
    <div className="bottom">
      <div className="poster">
        <img src={posterURL} alt={title}></img>
      </div>
      <h4>{title}</h4>
    </div>
  );
}
