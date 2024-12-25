import express from "express";
import {
  fetchAllMovies,
  createMovie,
  fetchMovieById,
} from "../movie/movie.controller";
import { validateMovie } from "../movie/movie.validation"; // Adjust the import path if necessary

const router = express.Router();

router.get("/", fetchAllMovies);

router.post("/", validateMovie, createMovie);

router.get("/:id", fetchMovieById);

export default router;