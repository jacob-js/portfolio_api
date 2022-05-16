import { Router } from "express";
import projectsController from "../controllers/projects.controller";
import validateSchema from "../middlwares/validateSchema.middlware";
import ProjectsValidator from "../validators/projects.validators";

const projectsRouter = Router()
                        .get('/', projectsController.projects)
                        .post('/', validateSchema(ProjectsValidator.projectSchema), projectsController.projects)


export default projectsRouter;                        