//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Main from "./component/main.jsx";

//render your react application
ReactDOM.render(<Main />, document.querySelector("#app"));
