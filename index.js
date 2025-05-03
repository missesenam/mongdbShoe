const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ShoeRouter = require("./routes/ShoeRoute");
const port = 5000;

const app = express();

app.use(bodyParser.json());

app.use("/api", ShoeRouter);

mongoose
  .connect(
    "mongodb+srv://esidjograce:L5NgOUFcSOtmgjt9@cluster0.xm0uqvb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then((result) => {
    app.listen(port, () => console.log(`server ready on port: ${port}`));
  })
  .catch((err) => console.log(err));
