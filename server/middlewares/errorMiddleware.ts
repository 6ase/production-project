import { NextFunction } from "express";

const errorMW = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (!err) next();
    
}

export default {
    errorMW
}