import mongoose from "mongoose";

const countrySchema = mongoose.Schema({
  code: String,
});

var Country = mongoose.model("countries", countrySchema);

export default Country;
