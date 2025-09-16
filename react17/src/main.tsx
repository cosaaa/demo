import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import microApp from '@micro-zoe/micro-app'


microApp.start()
ReactDOM.render(
      <App />,
document.getElementById("root"),
);


