import { Request, Response } from "express";
import db from "../models";
import { IUser } from "../models/user-model";

const users = db.users;

const findAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const usersData: IUser[] = await users.find();
    res.json(usersData);
  } catch (err: any) {
    res.status(500).send({ message: err.message || "Some error occurred while retrieving users." });
  }
};

export = {
  findAll
};