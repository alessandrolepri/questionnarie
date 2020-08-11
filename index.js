require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static(`${__dirname}/dist`));

app.use(bodyParser.json());

app.get("/*", (req, res) => res.sendFile(`${__dirname}/dist/index.html`));

app.listen(process.env.PORT || 4000, () =>
  console.log(`Up and running on port ${process.env.PORT}`)
);
