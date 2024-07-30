import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../models";
import { IUser } from "../models/user-model";

const User = db.users;

const findAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const usersData: IUser[] = await User.find();
    res.json(usersData);
  } catch (err: any) {
    res.status(500).send({ message: err.message || "Some error occurred while retrieving users." });
  }
};

const login = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      res.status(400).json({ message: "Invalid username or password" });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({ message: "Invalid username or password" });
      return;
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET!, { expiresIn: "1h" });
    res.json({ token });
  } catch (err: any) {
    res.status(500).json({ message: err.message || "Something went wrong" });
  }
};

const register = async (req: Request, res: Response): Promise<void> => {
  const { username, password, role, mail } = req.body;

  try {
    const newUser = new User({ username, password, role, mail });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err: any) {
    res.status(500).json({ message: err.message || "Something went wrong" });
  }
};

export = {
  findAll,
  login,
  register,
};