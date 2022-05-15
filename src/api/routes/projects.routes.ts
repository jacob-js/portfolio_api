import { Router } from "express";
import projectsController from "../controllers/projects.controller";

const projectsRouter = Router()
                        .get('/', projectsController.projects)


export default projectsRouter;                        