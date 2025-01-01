import express from "express";
import bodyParser from "body-parser";
import movieRoutes from "./movie/movie.routes";
import authRoutes from "./auth/auth.routes";
import animeRoutes from "./anime/anime.routes";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use("/auth", authRoutes);
app.use("/movies", movieRoutes);
app.use("/anime", animeRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
