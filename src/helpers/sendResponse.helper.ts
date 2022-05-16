import { Request, Response } from "express";

function sendResponse(res: Response, statusCode: number, msg?: any, data?: any) {
  res.status(statusCode).json({
    statusCode,
    msg,
    data
  });
};

export default sendResponse;