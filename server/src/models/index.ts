import mongoose from "mongoose";
import { IUser } from "./user-model";
import dbConfig from "../config/db-config";

import User from "./user-model";

interface IDb {
  mongoose: typeof mongoose;
  url: string;
  users: mongoose.Model<IUser>;
}

const db: IDb = {
  mongoose,
  url: dbConfig.url,
  users: User,
};

export default db;
