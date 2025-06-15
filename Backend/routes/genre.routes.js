import express from "express";
import { getGenres } from "../controller/genre.controller.js";

const router = express.Router();

router.get("/", getGenres);

export default router;
