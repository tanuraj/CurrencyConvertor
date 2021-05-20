import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import countryRoutes from "./routes/countries.js";

const app = express();
app.use(bodyParser.json({ limit: "2mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "2mb", extended: true }));
app.use(cors());

app.use("/countries", countryRoutes);

const CONNECTION_URL = "mongodb+srv://tanuraj:dbws@123@mern-basic-awtmo.mongodb.net/clientTest?retryWrites=true&w=majority";
const PORT = 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
