const express = require("express");

const app = express();

app.set("secret", "ukq2egqayuawkd");
app.use(express.json());
app.use(require("cors")());
app.use("/index", express.static(__dirname + "/dist"));
require("./routes")(app);

app.listen(3000, () => {
  console.log("http://localhost:3000/");
});
