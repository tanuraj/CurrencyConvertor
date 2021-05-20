import express from "express";
import { getCountries } from "../controllers/country.js";

const router = express.Router();

//localhost:5000/countries
router.get("/", getCountries);

export default router;
