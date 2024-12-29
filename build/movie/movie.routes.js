"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const movie_controller_1 = require("../movie/movie.controller");
const movie_validation_1 = require("../movie/movie.validation");
const auth_controller_1 = require("../auth/auth.controller");
const router = express_1.default.Router();
router.get("/", auth_controller_1.authenticateJWT, movie_controller_1.fetchAllMovies);
router.post("/", auth_controller_1.authenticateJWT, movie_validation_1.validateMovie, movie_controller_1.createMovie);
router.get("/:id", auth_controller_1.authenticateJWT, movie_controller_1.fetchMovieById);
exports.default = router;
