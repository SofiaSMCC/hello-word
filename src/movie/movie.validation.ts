import { body } from "express-validator";

export const validateMovie = [
  body("title").notEmpty().withMessage("El título es obligatorio"),
  body("director").notEmpty().withMessage("El director es obligatorio"),
  body("year")
    .isInt({ min: 1900, max: new Date().getFullYear() })
    .withMessage("El año debe ser un número válido"),
  body("genre").notEmpty().withMessage("El género es obligatorio"),
];
