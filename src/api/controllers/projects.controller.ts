import { Request, Response } from 'express';
import sendResponse from '../../helpers/sendResponse.helper';
import uploadImage from '../../helpers/uploadImage.helper';
import ProjectsServices from '../services/projects.services';

class ProjectsControllers {
    async projects(req: Request, res: Response){
        const { method } = req;
        if(method === 'GET'){
            try {
                const projects = await ProjectsServices.getAllProjects();
                return sendResponse(res, 200, 'Success', projects);
            } catch (error) {
                return sendResponse(res, 500, 'Error', error);
            }
        }else if(method === 'POST'){
            const image = req.files?.image;
            try {
                const uploadRes = await uploadImage(image);
                const project = await ProjectsServices.createProject({...req.body, image: uploadRes.url});
                return sendResponse(res, 201, 'Success', project);
            } catch (error) {
                console.log(error);                
                return sendResponse(res, 500, error, {});
            }
        }else{
            return sendResponse(res, 405, 'Method not allowed');
        }
    }
};

export default new ProjectsControllers();