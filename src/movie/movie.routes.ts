import express from "express";
import {
  fetchAllMovies,
  createMovie,
  fetchMovieById,
} from "../movie/movie.controller";
import { validateMovie } from "../movie/movie.validation";
import { authenticateJWT } from "../auth/auth.controller";

const router = express.Router();

router.get("/", authenticateJWT, fetchAllMovies);

router.post("/", authenticateJWT, validateMovie, createMovie);

router.get("/:id", authenticateJWT, fetchMovieById);

export default router;
