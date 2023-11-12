import React, { useState } from "react";

function Toggle() {
  function handleClick(){ setIsOn((isOn) => !isOn); }
  const [isOn, setIsOn] = useState(false);
  const color = isOn ? "red" : "green";
  return <button onClick={handleClick} style={{background: color}}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
