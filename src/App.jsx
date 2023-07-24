import { useState } from "react";
import Imagelist from "./components/Imagelist";
import SearchBar from "./components/SearchBar";

function App() {
  const [info, setInfo] = useState([]);
  return (
    <>
      <SearchBar setInfo={setInfo} />
      <Imagelist images={info} />
    </>
  );
}

export default App;
