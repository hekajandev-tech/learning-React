import React from "react";
// import theme from './download.png';
import BioData from "./Bio";
import UpdateTime from "./UpdateTime";
import Count from "./countNum";
import Timer from "./Timer";
import ReactList from "./ListMap";
import ClientEvent from "./ClientEvent";

//Child calling 

//welcome component
const Welcome = (props) => {
  return <div>{props.children}</div>
}

//button 
const element = React.createElement(
  "Button",
  {
    className: 'Btn',
    onClick: () => alert("Hello World!"),
  },

  "Click Me"
)

export default function App() {
  return (
    <Welcome>
      <h1>Hi!!!</h1>
      {element}
      <BioData/>
      <UpdateTime/>
      <Count/>
      <Timer/>
      <ReactList/>
      <ClientEvent/>
    </Welcome>
  );
}


