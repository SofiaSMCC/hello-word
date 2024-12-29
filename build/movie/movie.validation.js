"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMovie = void 0;
const express_validator_1 = require("express-validator");
exports.validateMovie = [
    (0, express_validator_1.body)("title").notEmpty().withMessage("El título es obligatorio"),
    (0, express_validator_1.body)("director").notEmpty().withMessage("El director es obligatorio"),
    (0, express_validator_1.body)("year")
        .isInt({ min: 1900, max: new Date().getFullYear() })
        .withMessage("El año debe ser un número válido"),
    (0, express_validator_1.body)("genre").notEmpty().withMessage("El género es obligatorio"),
];
