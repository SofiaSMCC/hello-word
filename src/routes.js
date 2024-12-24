const express = require("express");
const router = express.Router();

var movies = [
  { id: 1, name: "The Godfather", year: 2005 },
  { id: 2, name: "The Departed", year: 1993 },
  { id: 3, name: "Umberto", year: 2001 },
  { id: 4, name: "etc", year: 2000 },
];

router.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Movies API" });
});

router.get("/movies", (req, res) => {
  res.status(200).json(movies);
});

router.post("/movies", (req, res) => {
  const newMovie = req.body;
  newMovie.id = movies.length + 1;
  movies.push(newMovie);
  res
    .status(201)
    .json({ message: "Movie created successfully", movie: newMovie });
});

module.exports = router;
