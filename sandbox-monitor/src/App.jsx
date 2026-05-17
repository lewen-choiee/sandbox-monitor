import "./App.css";
import { TopBar } from "./pages/TopBar";
import { BLETest } from "./pages/BLETest";
import { useState } from "react";

export default function App() {
  const [currentLang, setNewLang] = useState("zhs");

  const SwitchLang = (() => {
    if (currentLang == "eng") setNewLang("zht");
    else if (currentLang == "zht") setNewLang("zhs");
    else if (currentLang == "zhs") setNewLang("eng");
  })

  return (
    <div style={{ width: "100%", height: "100%", overflowX: "hidden", overflowY: "hidden", position: "absolute", left: 0, top: 0, display: "flex" }}>
      <div id="menu">
        <TopBar lang={currentLang} />
        <div id="lang-toggle" onClick={SwitchLang}>English/<br />繁/简中</div>
        <BLETest lang={currentLang} />
      </div>
    </div>
  );
}