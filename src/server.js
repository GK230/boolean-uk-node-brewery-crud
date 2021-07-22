const express = require("express");
const morgan = require("morgan");

const app = express();

const breweriesRouter = require("./resources/breweries/routes");

app.use(morgan("dev"));
app.use(express.json());

app.use(("/breweries", breweriesRouter));

app.get("*", (req, res) => {
  res.status(404).json({ msg: "can't find that" });
});

app.listen(4000, () => {
  console.log("I'm running!");
});
