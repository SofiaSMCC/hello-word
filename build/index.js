"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const movie_1 = __importDefault(require("./movie/routes/movie"));
const app = (0, express_1.default)();
const port = 3000;
app.get("/app", (_req, res) => {
    res.send("Hello, TypeScript Express!");
});
app.use("/app/movies", movie_1.default);
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
