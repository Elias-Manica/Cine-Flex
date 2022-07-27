import "../assets/css/reset.css";
import "../assets/css/style.css";

import Topo from "./Top/Top";
import SelectMovie from "./SelectMovie/SelectMovie";
import SelectHour from "./SelectHour/SelectHour";
import SeatsList from "./SeatsList/SeatsList";
import BoughtTicket from "./BoughtTicket/BoughtTicket";

export default function App() {
  return (
    <>
      <Topo />
      <BoughtTicket />
    </>
  );
}
