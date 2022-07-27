import "./style.css";

export default function Bottom({ posterURL, title, day, name }) {
  return (
    <div className="bottom">
      <div className="poster">
        <img src={posterURL} alt={title}></img>
      </div>
      <div className="layoutBottom">
        <p>{title} </p>
        <p>
          {} - {name}
        </p>
      </div>
    </div>
  );
}
