import { RequestHandler } from "express";
import usersController from "../controllers/user-controller";
import authMiddleware from "../middlewares/auth-middleware";

interface Route {
  method: string;
  path: string;
  func: RequestHandler;
  middleware?: RequestHandler | null
}

const endpoints: Route[] = [
  { method: "get", path: "published", func: usersController.findAll, middleware: null },
  { method: "post", path: "login", func: usersController.login, middleware: null },
  { method: "post", path: "logout", func: usersController.logout, middleware: null },
  { method: "post", path: "register", func: usersController.register, middleware: null },
  { method: "post", path: "verify-email", func: usersController.verifyEmail, middleware: null },
  { method: "post", path: "verify-user", func: usersController.verifyToken, middleware: authMiddleware }
];

export default endpoints;