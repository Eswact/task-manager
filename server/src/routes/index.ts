import express, { Router, RequestHandler } from "express";
import userRoutes from "./user-route";

const router: Router = express.Router();

const chooseMethod = (method: string, path: string, func: RequestHandler): void => { 
  switch (method) {
    case "get":
      router.get(path, func);
      break;
    case "post":
      router.post(path, func);
      break;
    case "put":
      router.put(path, func);
      break;
    case "delete":
      router.delete(path, func);
      break;
    default:
      break;
  }
};

userRoutes.forEach(({ method, path, func }) => {
  chooseMethod(method, `/users/${path}`, func);
});

export default router;
