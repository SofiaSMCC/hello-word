import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "./user";

const secretKey = "1234";

let users: User[] = [];

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { username, password } = req.body;

  try {
    const existingUser = users.find((user) => user.username === username);
    if (existingUser) {
      res.status(400).json({ message: "El usuario ya existe" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { username, password: hashedPassword };
    users.push(newUser);

    res.status(201).json({ message: "Usuario registrado exitosamente" });
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { username, password } = req.body;

  try {
    const user = users.find((user) => user.username === username);
    if (!user) {
      res.status(401).json({ message: "Credenciales incorrectas" });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(401).json({ message: "Credenciales incorrectas" });
      return;
    }

    const token = jwt.sign({ username }, secretKey, { expiresIn: "1h" });
    res.json({ token });
  } catch (error) {
    next(error);
  }
};

export const authenticateJWT = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (token) {
    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.sendStatus(401);
      }

      // @ts-ignore
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};
