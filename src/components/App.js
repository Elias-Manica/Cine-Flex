import "../assets/css/reset.css";
import "../assets/css/style.css";

import SelectMovie from "./SelectMovie/SelectMovie";
import Topo from "./Top/Top";

export default function App() {
  return (
    <>
      <Topo />
      <SelectMovie />
    </>
  );
}
