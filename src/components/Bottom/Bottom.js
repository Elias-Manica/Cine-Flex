import "./style.css";

export default function Bottom({ posterURL, title, day, name }) {
  return (
    <div className="bottom">
      <div className="poster">
        <img src={posterURL} alt={title}></img>
      </div>
      <div className="layoutBottom">
        <h4>{title}</h4>
        <h5>
          {} - {name}
        </h5>
      </div>
    </div>
  );
}
