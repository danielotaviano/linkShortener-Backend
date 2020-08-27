import { Router } from "express";
import LinkController from "./controllers/LinkController";

const routes = Router();

routes.post("/", LinkController.store);

routes.get("/:slug", LinkController.redirect);
export default routes;
