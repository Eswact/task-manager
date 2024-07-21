import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import db from "./models"; // TypeScript'e uygun import
import routes from "./routes/index"; // TypeScript'e uygun import

dotenv.config();

const app: Application = express();

// CORS
const corsOptions = {
  origin: ['http://localhost:5072'],
};
app.use(cors(corsOptions));

// bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB bağlantısı
db.mongoose
  .connect(db.url, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// set port & listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// route
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to Server." });
});
app.use("/api", routes);