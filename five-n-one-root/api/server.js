const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ credentials: true }));

app.get("/", (req, res) => res.send("5n1 API Server"));

app.klisten(5000);
console.log("Server listening at 5000");
