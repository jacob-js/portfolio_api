import { Router } from "express";
import projectsRouter from "./api/routes/projects.routes";

const apiRouter = Router()
                    .use('/projects', projectsRouter)


export default apiRouter;