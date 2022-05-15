import { Request, Response } from 'express';
import sendResponse from '../../helpers/sendResponse.helper';
import ProjectsServices from '../services/projects.services';

class ProjectsControllers {
    async projects(req: Request, res: Response){
        const { method } = req;
        if(method === 'GET'){
            try {
                const projects = await ProjectsServices.getAllProjects();
                sendResponse(req, res, 200, 'Success', projects);
            } catch (error) {
                sendResponse(req, res, 500, 'Error', error);
            }
        }else if(method === 'POST'){
            const project = await ProjectsServices.createProject(req.body);
            sendResponse(req, res, 201, 'Success', project);
        }else{
            sendResponse(req, res, 405, 'Method not allowed');
        }
    }
};

export default new ProjectsControllers();