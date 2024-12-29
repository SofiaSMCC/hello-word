import { Movie } from "./movie";

let movies: Movie[] = [];

export const getAllMovies = async (): Promise<Movie[]> => {
  return movies;
};

export const addMovie = async (newMovie: Omit<Movie, "id">): Promise<Movie> => {
  const id = Number(movies.length) + 1;
  const movie = { id, ...newMovie };
  movies.push(movie);
  return movie;
};

export const getMovieById = async (id: number): Promise<Movie | null> => {
  return movies.find((movie) => movie.id === id) || null;
};
