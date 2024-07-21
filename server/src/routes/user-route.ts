import { RequestHandler } from "express";
const usersController = require("../controllers/user-controller");

interface Route {
  method: string;
  path: string;
  func: RequestHandler;
}

const endpoints: Route[] = [
  { method: "get", path: "published", func: usersController.findAll },
];

export default endpoints;