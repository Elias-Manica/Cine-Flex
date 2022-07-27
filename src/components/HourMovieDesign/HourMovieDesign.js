import "./style.css";

export default function HourMovieDesign({ weekday, date, hour }) {
  return (
    <div className="showHour" onClick={() => console.log(hour, weekday)}>
      <h3>
        {weekday} - {date}
      </h3>
      <div className="selectHour">
        {hour.map((value) => (
          <div className="squareHour" key={value.id}>
            {value.name}
          </div>
        ))}
      </div>
    </div>
  );
}
