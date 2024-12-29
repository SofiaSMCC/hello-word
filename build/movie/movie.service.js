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
exports.getMovieById = exports.addMovie = exports.getAllMovies = void 0;
const uuid_1 = require("uuid");
let movies = [];
const getAllMovies = () => __awaiter(void 0, void 0, void 0, function* () {
    return movies;
});
exports.getAllMovies = getAllMovies;
const addMovie = (newMovie) => __awaiter(void 0, void 0, void 0, function* () {
    const id = (0, uuid_1.v4)();
    const movie = Object.assign({ id }, newMovie);
    movies.push(movie);
    return movie;
});
exports.addMovie = addMovie;
const getMovieById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return movies.find((movie) => movie.id === id) || null;
});
exports.getMovieById = getMovieById;
