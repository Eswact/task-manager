import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";

export interface IUser extends Document {
  username: string;
  password: string;
  role: number;
  mail: string;
}

const UserSchema: Schema = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: Number, required: true },
    mail: { type: String, required: true },
  },
  { timestamps: true }
);

// Password hash
UserSchema.pre<IUser>("save", async function(next: Function) {
  if (!this.isModified("password")) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

export default mongoose.model<IUser>("User", UserSchema);