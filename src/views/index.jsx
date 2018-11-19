import React from "react";
import Rua from "same-dva";
import models from "./models/index";
import App from "./components/App";

const app = new Rua({
  root: <App />,
  target: "root",
});

app.model(models);
app.run();
