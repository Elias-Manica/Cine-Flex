import "./style.css";
import { Link } from "react-router-dom";

export default function HourMovieDesign({ weekday, date, hour }) {
  return (
    <div className="showHour" onClick={() => console.log(hour, weekday)}>
      <h3>
        {weekday} - {date}
      </h3>
      <div className="selectHour">
        {hour.map((value) => (
          <Link to={`/assentos/${value.id}`} key={value.id}>
            <div
              className="squareHour"
              key={value.id}
              onClick={() => console.log(`${value.id}`)}
            >
              {value.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
