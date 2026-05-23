import React from "react";
import theme from './download.png';


//Child calling 
const Welcome = (props) => {
  return <div>{props.children}</div>
}

export default function App() {
  return (
    <Welcome>
      <h1>Hi!!!</h1>
    </Welcome>
  );
}


