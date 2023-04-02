import "./App.css";
import { createContext, useState, useContext } from "react";
import SideBar from "./SideBar";
import TitlesContext from "./TitlesContext";

function App() {
  const titles = useContext(TitlesContext);
  return (
    <div className="App">
      <TitlesContext.Provider value={titles}>
        <SideBar />
      </TitlesContext.Provider>
    </div>
  );
}

export default App;
