"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchMovieById = exports.createMovie = exports.fetchAllMovies = void 0;
const movie_service_1 = require("./movie.service");
const express_validator_1 = require("express-validator");
const fetchAllMovies = (_req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movies = yield (0, movie_service_1.getAllMovies)();
        res.status(200).json(movies);
    }
    catch (error) {
        next(error);
    }
});
exports.fetchAllMovies = fetchAllMovies;
const createMovie = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
    }
    try {
        const { title, director, year, genre } = req.body;
        const newMovie = yield (0, movie_service_1.addMovie)({ title, director, year, genre });
        res.status(201).json(newMovie);
    }
    catch (error) {
        next(error);
    }
});
exports.createMovie = createMovie;
const fetchMovieById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const movie = yield (0, movie_service_1.getMovieById)(id);
        if (!movie) {
            res.status(404).json({ message: "Película no encontrada" });
            return;
        }
        res.status(200).json(movie);
    }
    catch (error) {
        next(error);
    }
});
exports.fetchMovieById = fetchMovieById;
