import express, { Router, RequestHandler } from "express";
import userRoutes from "./user-route";
// import taskRoutes from './task-route';

const router: Router = express.Router();

const allRoutes = [
  { prefix: "/user", routes: userRoutes },
  // { prefix: "/task", routes: taskRoutes },
];

const chooseMethod = (router: Router, method: string, path: string, func: RequestHandler, middleware?: RequestHandler): void => {
  switch (method) {
    case "get":
      if (middleware) {
        router.get(path, middleware, func);
      } else {
        router.get(path, func);
      }
      break;
    case "post":
      if (middleware) {
        router.post(path, middleware, func);
      } else {
        router.post(path, func);
      }
      break;
    case "put":
      if (middleware) {
        router.put(path, middleware, func);
      } else {
        router.put(path, func);
      }
      break;
    case "delete":
      if (middleware) {
        router.delete(path, middleware, func);
      } else {
        router.delete(path, func);
      }
      break;
    default:
      throw new Error("Invalid method");
  }
};

// Tüm route gruplarını dinamik olarak ekliyoruz
allRoutes.forEach(({ prefix, routes }) => {
  routes.forEach(({ method, path, func, middleware = null }) => {
    chooseMethod(router, method, `${prefix}/${path}`, func, middleware || undefined);
  });
});

export default router;