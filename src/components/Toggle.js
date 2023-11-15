import React, { useState } from "react";

function Toggle() {
  function handleClick(){ setIsOn((isOn) => !isOn); }
  const [isOn, setIsOn] = useState(false);
  const color = isOn ? "red" : "green";
  return <button onClick={handleClick} style={{background: color}}>{isOn ? "ON" : "OFF"}</button>;
}

// my practice below

function Status (){
  function handleStatus(){setIsActive((isActive) => !isActive);}

  const [isActive, setIsActive] = useState (true);
  const statusColor = isActive ? "green" : "blue";
  return <button onClick={handleStatus} style={{background: statusColor}}> {isActive ? "Logout": "Login"} </button>
}



export default Toggle;
export {Status};
