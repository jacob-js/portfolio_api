import { Request, Response } from "express";

function sendResponse(req: Request, res: Response, statusCode: number, msg?: string, data?: any) {
  res.status(statusCode).json({
    statusCode,
    data
  });
};

export default sendResponse;