import express from "express";
import mongoose from "mongoose";

import Country from "../models/country.js";

const router = express.Router();

export const getCountries = async (req, res) => {
  try {
    const countries = await Country.find();
    res.status(200).json(countries);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
