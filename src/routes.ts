import { Router } from "express";
import contactsRouter from "./api/routes/contacts.routes";
import projectsRouter from "./api/routes/projects.routes";

const apiRouter = Router()
                    .use('/projects', projectsRouter)
                    .use('/contacts', contactsRouter);


export default apiRouter;